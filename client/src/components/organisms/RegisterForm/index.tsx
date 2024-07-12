import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EmailForm, { EmailFormData } from './EmailForm';
import DataForm from './DataForm';
import fetchApi from '../../../helper/api';

interface RegisterFormProps {
  register: boolean;
}

interface SignupResponse {
  // Define the expected structure of the signup response here
  success: boolean;
  message?: string;
}

interface LoginResponse {
  token: string;
  auth: boolean;
  message?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ register }) => {
  const [formEmail, setFormEmail] = useState<boolean>(false);
  const [registerComplete, setRegisterComplete] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | undefined>(undefined);

  const navigate = useNavigate();

  const handleSubmitEmail = () => {
    setFormEmail(true);
  };

  const handleSubmitData = async () => {
    try {
      const response = await fetchApi<SignupResponse>('/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // add your registration data here
        }),
      });

      console.log(response);
      setRegisterComplete(true);
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  const handleLogin = async (data: EmailFormData) => {
    try {
      const response = await fetchApi<LoginResponse>('/api/v1/users/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login response:', response);
      if (response.auth) {
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      } else {
        setErrors(response.message);
      }
    } catch (error) {
      console.error('Failed to login:', error);
      setErrors('An error occurred during login.');
    }
  };

  if (registerComplete) {
    return (
      <div>
        <h2>Gracias por registrarte!😀</h2>
        <Link to="/login">
          <small>Ahora inicia sesión</small>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%' }}>
      {!formEmail ? (
        <EmailForm
          onSubmit={register ? handleSubmitEmail : handleLogin}
          register={register}
        />
      ) : (
        <DataForm onSubmit={handleSubmitData} handleSubmit={handleSubmitEmail} />
      )}
      <div>
        {errors && (
          <div>
            <small className="text-error">
              Error al iniciar sesión: {errors}
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
