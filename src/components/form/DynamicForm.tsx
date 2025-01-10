import React, { useState } from 'react';

interface Field {
  name: string;
  type: string;
  label?: boolean;
  typeInput: string;
  placeholder?: string;
  required?: boolean;
}

interface DynamicFormProps {
  styleForm?: string,
  styleInput?: string;
  fields: Field[];
  values: { [key: string]: string };
  setValues: (values: { [key: string]: string }) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ styleForm, styleInput, fields, values, setValues }) => {
  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <form className={styleForm}>
      {
        fields.map((field) => (
          field.typeInput == "text" &&
          <div key={field.name} className={styleInput}>
            {
              field.label &&
              <label htmlFor={field.name}>{field.placeholder || field.name}</label>
            }
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
            />
          </div>
        ))
      }
    </form>
  );
};

export default DynamicForm;
