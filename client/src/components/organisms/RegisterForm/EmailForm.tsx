import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './EmailForm.scss';

export interface EmailFormData {
  email: string;
  password?: string;
  username?: string;
  passwordRetype?: string;
}

interface EmailFormProps {
  onSubmit: (data: EmailFormData) => void;
  register: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit, register }) => {
  const {
    register: formRegister,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailFormData>();

  const submitForm = (data: EmailFormData) => {
    onSubmit(data);
  };

  return (
    <div className="form_container">
      <div className="form_banner">
        <img src="/assets/earth.png" alt="earth" />
      </div>
      <div className="form_div">
        <form onSubmit={handleSubmit(submitForm)}>
          <h3 className="form_saludo">Hola, bienvenido a GreenCycle!</h3>
          <input
            placeholder="Email"
            {...formRegister('email', {
              required: true,
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p role="alert">Ingresa tu email</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p role="alert">Introduzca un email válido</p>
          )}

          {register && (
            <>
              <input
                placeholder="Nombre de usuario"
                type="text"
                {...formRegister('username', { required: true })}
              />
              {errors.username?.type === 'required' && (
                <p role="alert">Ingresa un nombre de usuario</p>
              )}
            </>
          )}
          <input
            placeholder="Contraseña"
            type="password"
            {...formRegister('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <p role="alert">Ingresa una contraseña</p>
          )}

          {register && (
            <>
              <input
                placeholder="Repite tu contraseña"
                type="password"
                {...formRegister('passwordRetype', { required: true })}
              />
              {errors.passwordRetype?.type === 'required' && (
                <p role="alert">Ingresa una contraseña</p>
              )}
            </>
          )}

          <button type="submit" className="form_button">
            {register ? 'Completar datos' : 'Iniciar sesión'}
          </button>
          <div className="cta_div">
            {register ? (
              <small>
                ¿Ya tienes cuenta?&nbsp;
                <Link to="/login">Ingresa aquí</Link>
              </small>
            ) : (
              <small>
                ¿Aun no tienes cuenta?&nbsp;
                <Link to="/registro">Registrate aqui</Link>
              </small>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
