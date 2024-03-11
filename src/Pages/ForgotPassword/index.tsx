import './index.css';
import Input from '../../Components/Input'
import Description from '../../Components/Description'
import Button from '../../Components/Button'
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ForgotPassword() {
  return (
       <div className='flex flex-col gap-y-8 h-25'>
          <h1 className='font-semibold text-2xl ml-10'>Leavemetry.</h1>
          <Description title="Forgot Password?" description="Enter the email address you used when you joined and we'll send you instructions to reset your password. For security reasons, we do NOT store your password. So rest assured that we will never send your password via email." />
          <Formik
                  initialValues={{
                    email: '',
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Invalid email address').required(),
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
              <NavLink to='/resetpassword'><Button value='Send reset instruction' width='w-96'/></NavLink>
        </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default ForgotPassword
