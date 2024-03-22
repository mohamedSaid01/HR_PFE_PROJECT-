import { Formik, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../Components/Input';
import Description from '../../Components/Description';
import Button from '../../Components/Button';
import { NavLink } from 'react-router-dom';
import logoEmail from '../../Assets/Icons/logoEmail.svg'
import logoPassword from '../../Assets/Icons/logoPassword.svg'



function Login() {
  return (
    <div className='flex flex-col gap-y-2'>
    <div className='flex flex-col gap-y-8 h-25'>
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
          <Form className='flex flex-col gap-y-6 h-25'>
            <div className='flex flex-col gap-4'>
              <Input id='email' type="email" placeholder="Email Address" text="Email Address" name="email" logo={logoEmail} width='w-96' />
              {touched?.email && <ErrorMessage name='email' component={'div'} className="text-red-500 text-xs"/>}
            </div>
              <div className='flex flex-col gap-4'> 
                <Input id='password' type="password" placeholder="Password" text="Password" name="password" logo={logoPassword} width='w-96'/>
                {touched?.password && <ErrorMessage name='password' component={'div'} className="text-red-500 text-xs"/>}
              </div>
              <NavLink to="/dashboard"><Button value='Login' width='w-96'/></NavLink>
         </Form>
          )
        }
      </Formik>    
      </div>
      <NavLink to='/forgotpassword'><p className="font-normal text-xs text-gray-400 text-right">Forgot Password?</p></NavLink>
    </div>
  );
}

export default Login;
