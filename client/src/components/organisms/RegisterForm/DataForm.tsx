import React from 'react';
import { useForm } from 'react-hook-form';
import './EmailForm.scss';

interface DataFormProps {
  onSubmit: (data: FormData) => void;
  handleSubmit: () => void;
}

export interface FormData {
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  phone: string;
}

const DataForm: React.FC<DataFormProps> = ({ onSubmit, handleSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit: formHandleSubmit,
  } = useForm<FormData>();

  const submitForm = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={formHandleSubmit(submitForm)}>
      <input
        placeholder="Nombre"
        {...register('firstName', {
          required: true,
          minLength: 3,
          maxLength: 60,
        })}
      />
      {errors.firstName?.type === 'required' && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}
      {errors.firstName?.type === 'maxLength' && (
        <p role="alert" className="alert text-error">
          Máximo de caracteres alcanzado
        </p>
      )}
      {errors.firstName?.type === 'minLength' && (
        <p role="alert" className="alert text-error">
          Ingresá tu nombre completo
        </p>
      )}
      <br />
      <input
        placeholder="Apellido"
        {...register('lastName', { required: true, maxLength: 60 })}
      />
      {errors.lastName?.type === 'required' && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}
      {errors.lastName?.type === 'maxLength' && (
        <p role="alert" className="alert text-error">
          Máximo de caracteres alcanzado
        </p>
      )}

      <input placeholder="Ciudad" {...register('city', { required: true })} />
      {errors.city?.type === 'required' && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}

      <input
        placeholder="Dirección"
        {...register('address', { required: true })}
      />
      {errors.address?.type === 'required' && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}

      <input
        type="number"
        placeholder="Teléfono"
        {...register('phone', { required: true, maxLength: 15 })}
      />
      {errors.phone?.type === 'required' && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}
      {errors.phone?.type === 'maxLength' && (
        <p role="alert" className="alert text-error">
          Máximo de caracteres alcanzado
        </p>
      )}
      <div>
        <button type="button" onClick={handleSubmit} className="button-xs borderless">
          Quiero completar mis datos en otro momento
        </button>
      </div>
      <button type="submit">Registrarme</button>
    </form>
  );
};

export default DataForm;
