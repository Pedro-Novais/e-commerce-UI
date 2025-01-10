import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserHook } from '../../hooks/useUser';
import DynamicForm from '../form/DynamicForm';

import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";

import styles from "./Auth.module.css"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { userLogged, error, fetchUserLogging } = useUserHook()
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
  });

  if (userLogged) {
    navigate('/')
  }

  const handleFormDataChange = (newData: { [key: string]: string }) => {
    setFormData(newData);
  };

  const handleSubmit = async (values: { [key: string]: string }) => {
    console.log('Form Data Submitted:', values);
    const data = {
      email: values.email,
      password: values.password
    }

    if (!data.email || data.email.trim() === "") {
      console.error('Necessário preencher os dados')
      return false
    }

    await fetchUserLogging(data)
  };

  const handleForgotPassword = () => {
    console.log("Esqueci minha senha clicado!");
  };

  const handleSignUp = () => {
    navigate('/cliente/cadastro')
  };

  const handleGoogleLogin = () => {
    console.log("Login via Google clicado!");
  };

  const fields = [
    { label: false, name: 'email', type: 'email', typeInput: 'text', placeholder: 'Email', required: true },
    { label: false, name: 'password', type: 'password', typeInput: 'text', placeholder: 'Senha', required: true },
  ];

  return (
    <div className={styles.containerForm}>
      <h1>Login</h1>
      <DynamicForm
        styleForm={styles.contentForm}
        styleInput={styles.containerInputTitle}
        fields={fields}
        values={formData}
        setValues={handleFormDataChange}
      />
      <p className={styles.forgetPassword} onClick={handleForgotPassword}>Esqueci minha senha</p>
      <div className={styles.accessAccount}>
        <button onClick={() => handleSubmit(formData)}>
          <CiLogin />
        </button>
        <div className={styles.containerButtonsRow}>
          <button onClick={handleGoogleLogin} style={{ backgroundColor: '#fff', width: '50%' }}>
            <FcGoogle />
          </button>
          <button onClick={handleSignUp} style={{ backgroundColor: '#fff', width: '50%' }}>
            Criar conta
          </button>
        </div>
      </div>
      {error &&
        <div>{error}</div>
      }
    </div>
  );
};

export default LoginPage;
