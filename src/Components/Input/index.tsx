import { Field } from 'formik';
import React from 'react';

interface InputProps {
  value?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
}

function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-black-900 font-normal text-xs">{props.value}</label>
      <div className="relative">
        <Field
          id={props.id}
          name={props.name}
          type={props.type} 
          placeholder={props.placeholder} 
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-#A2A2A7-400 focus:outline-none text-xs sm:w-64 md:w-80 lg:w-96 xl:w-96"
        />
      </div>
    </div>
  );
}

export default Input;

