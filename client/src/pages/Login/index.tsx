import React from 'react';
import RegisterForm from '../../components/organisms/RegisterForm';
import { Layout } from '../../components/organisms/Layout';

export const Login: React.FC = () => {
  return (
    <>
      <head>
        <title>Greencycle - Inicia Sesión</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Layout>
        <RegisterForm register={false} />
      </Layout>
    </>
  );
};

