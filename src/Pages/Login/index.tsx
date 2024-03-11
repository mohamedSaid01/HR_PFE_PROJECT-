import React from 'react';
import { Formik, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../Components/Input';
import Description from '../../Components/Description';
import Button from '../../Components/Button';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className='flex flex-col gap-y-8 h-25'>
      <h1 className='font-semibold text-2xl ml-10'>Leavemetry.</h1>
      <Description title="Sign In to your Account" description="Fill up your account Details" />
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email address').required(),
          password: Yup.string().required()
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          (
            {errors, touched}
          ) => (
          <Form className='flex flex-col gap-y-8 h-25'>
              <Input id='email' type="email" placeholder="Email Address" value="Email Address" name="email" />
              {touched?.email && <ErrorMessage name='email' component={'div'} className="text-red-500 text-xs"/>}
              <Input id='password' type="password" placeholder="Password" value="Password" name="password" />
              {touched?.password && <ErrorMessage name='password' component={'div'} className="text-red-500 text-xs"/>}
              <Button value='Login' width='w-96'/>
        </Form>
          )
        }
      </Formik>
      <NavLink to='/forgotpassword'><p className="font-normal text-xs text-gray-400 w-96 ">Forgot Password?</p></NavLink>
    </div>
  );
}

export default Login;
