import Input from '../../Components/Input'
import Description from '../../Components/Description'
import Button from '../../Components/Button'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ResetPassword() {
  return (
       <div className='flex flex-col gap-y-8 h-25'>
          <Description title="Reset Password" description="Verify your email and enter your reset code" />
          <Formik
                  initialValues={{
                    code: '',
                  }}
                  validationSchema={Yup.object().shape({
                    code: Yup.number().required(),
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
              <Input id='code' type="number" placeholder="Code" text="Code" name="code"/>
              {touched?.code && <ErrorMessage name='code' component={'div'} className="text-red-500 text-xs"/>}
              <NavLink to='/createnewpassword'><Button value='Enter reset code' width='w-96'/></NavLink>
        </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default ResetPassword
