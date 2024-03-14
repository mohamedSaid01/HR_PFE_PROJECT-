import { Field } from 'formik';
import React from 'react';

interface InputProps {
  text?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  logo?:any
}

function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-black-900 font-normal text-xs">{props.text}</label>
      <div className="relative">
      <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
        <img className="dark:hidden" src={props?.logo}/>
        <img className="dark:block hidden" src={props?.logo}/>
      </div>
        <Field
          id={props.id}
          name={props.name}
          type={props.type} 
          placeholder={props.placeholder} 
          className="text-gray-600 font-normal h-10 flex items-center pl-10 text-xs border border-gray-300 rounded focus:outline-none w-96"
        />
      </div>
    </div>
  );
}

export default Input;

