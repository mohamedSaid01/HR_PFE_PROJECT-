import Input from '../../Components/Input'
import Description from '../../Components/Description'
import Button from '../../Components/Button'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import password from '../../Assets/Icons/logoPassword.svg'

function CreateNewPassword() {
  return (
    <div className='flex flex-col gap-y-8 h-25'>
      <Description title="Create new password" description="Your new password must be different from previous used password" />
      <Formik
        initialValues={{
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required(),
          confirmPassword: Yup.string().required('confirm password is a required field')
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // Mettez votre logique de soumission ici
          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form className='flex flex-col gap-y-8 h-25' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
              <Input id='password' type="password" placeholder="Your Password" text="Password" name="password" logo={password} width='w-96' />
              {touched?.password && <ErrorMessage name='password' component={'div'} className="text-red-500 text-xs" />}
            </div>
            <div className='flex flex-col gap-4'>
              <Input id='confirmPassword' type="password" placeholder="Confirm Password" text="Confirm Password" name="confirmPassword" logo={password} width='w-96' />
              {touched?.confirmPassword && <ErrorMessage name='confirmPassword' component={'div'} className="text-red-500 text-xs" />}
            </div>
            <Button value='Reset password' width='w-96' />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateNewPassword;
