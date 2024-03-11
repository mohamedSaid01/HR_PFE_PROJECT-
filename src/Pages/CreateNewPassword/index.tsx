import Input from '../../Components/Input'
import Description from '../../Components/Description'
import Button from '../../Components/Button'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreateNewPassword() {
  return (
       <div className='flex flex-col gap-y-8 h-25'>
          <h1 className='font-semibold text-2xl ml-10'>Leavemetry.</h1>
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          (
            {errors, touched}
          ) => (
          <Form className='flex flex-col gap-y-8 h-25'>
              <Input id='password' type="password" placeholder="Your Password" value="Password" name="password" />
              {touched?.password && <ErrorMessage name='password' component={'div'} className="text-red-500 text-xs"/>}
              <Input id='confirmPassword' type="password" placeholder="Confirm Password" value="Confirm Password" name="confirmPassword" />
              {touched?.confirmPassword && <ErrorMessage name='confirmPassword' component={'div'} className="text-red-500 text-xs"/>}
              <Button value='Reset password' width='w-96'/>
        </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default CreateNewPassword
