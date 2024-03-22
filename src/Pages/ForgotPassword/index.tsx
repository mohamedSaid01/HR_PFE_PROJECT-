import Input from '../../Components/Input'
import Description from '../../Components/Description'
import Button from '../../Components/Button'
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import email from '../../Assets/Icons/logoEmail.svg'

function ForgotPassword() {
  return (
       <div className='flex flex-col gap-y-8 h-25'>
          <Description title="Forgot Password?" description="Enter the email address you used when you joined and we'll send you instructions to reset your password. For security reasons, we do NOT store your password. So rest assured that we will never send your password via email." />
          <Formik
                  initialValues={{
                    email: '',
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Invalid email address').required(),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                  }}
                   >
        {
          (
            {errors, touched}
          ) => (
          <Form className='flex flex-col gap-y-6 h-25'>
            <div className='flex flex-col gap-4'>
              <Input id='email' type="email" placeholder="Email Address" text="Email Address" name="email" logo={email} width='w-96' />
              {touched?.email && <ErrorMessage name='email' component={'div'} className="text-red-500 text-xs"/>}
            </div>
             <NavLink to='/resetpassword'><Button value='Send reset instruction' width='w-96'/></NavLink>
        </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default ForgotPassword
