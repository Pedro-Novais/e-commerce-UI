import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DynamicForm from '../form/DynamicForm';
import styles from './Auth.module.css'

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState<boolean>(false)
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        email: '',
        password: '',
    });

    const handleFormDataChange = (newData: { [key: string]: string }) => {
        setFormData(newData);
    };

    const fields = [
        { label: false, name: 'name', type: 'text', typeInput: 'text', placeholder: 'Nome', required: true },
        { label: false, name: 'phone', type: 'number', typeInput: 'text', placeholder: 'Número de celular', required: false },
        { label: false, name: 'email', type: 'email', typeInput: 'text', placeholder: 'Email', required: true },
        { label: false, name: 'password', type: 'password', typeInput: 'text', placeholder: 'Senha', required: true },
    ];


    return (
        <div className={styles.containerForm}>
            <h1>Cadastro</h1>
            <DynamicForm
                styleForm={styles.contentForm}
                styleInput={styles.containerInputTitle}
                fields={fields}
                values={formData}
                setValues={handleFormDataChange}
            />
            <div className={styles.accessAccount}>
                <div className={styles.containerButtonsRow}>
                    <button style={{ backgroundColor: '#fff', width: '50%' }} onClick={() => navigate('/cliente/login')}>
                        Já possuo uma conta
                    </button>
                    <button style={{ backgroundColor: '#fff', width: '50%' }}>
                        Cadastre-se
                    </button>
                </div>
            </div>
            {error &&
                <div>{error}</div>
            }
        </div>
    )
}

export default Register 