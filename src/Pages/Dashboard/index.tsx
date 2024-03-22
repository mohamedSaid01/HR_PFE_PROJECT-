import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import sickIcon from '../../Assets/Icons/sickIcon.svg';
import lockIcon from '../../Assets/Icons/lockIcon.svg';
import sunIcon from '../../Assets/Icons/sunIcon.svg';
import infoTriangleIcon from '../../Assets/Icons/infoTriangleIcon.svg';
import descriptionIcon from '../../Assets/Icons/descriptionIcon.svg';
import calendarIcon from '../../Assets/Icons/calendarIcon.svg';
import leaveTypeIcon from '../../Assets/Icons/leaveTypeIcon.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import CardLeave from '../../Components/cardLeaveType';

function Dashboard() {
  return (
    <div className='flex flex-col gap-16'>
      <div className='flex flex-col gap-10 text-sm font-medium'>
        <div className='flex flex-col gap-y-6'>
          <h1>My Leave Balance</h1>
          <div className='flex gap-10'>
            <CardLeave logo={sickIcon} name="Sick" color="bg-red-100" />
            <CardLeave logo={sunIcon} name="Vacation" color="bg-orange-100" />
            <CardLeave logo={infoTriangleIcon} name="Personal" color="bg-purple-200" />
            <CardLeave logo={lockIcon} name="Casual" color="bg-blue-100" />
          </div>
        </div>
        <div className='flex flex-col gap-y-6'>
          <h1>Ask For a Leave</h1>
          <Formik
            initialValues={{
              typeOfLeave: '',
              description: '',
              dateFrom: '',
              dateTo: '',
            }}
            validationSchema={Yup.object().shape({
              typeOfLeave: Yup.string().required("type of leave is a required field"),
              description: Yup.string().required(),
              dateFrom: Yup.string().required("date is a required field"),
              dateTo: Yup.string().required("date is a required field")
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className='flex flex-col gap-y-6 h-25'>
                <div className='flex flex-col gap-y-2'>
                  <label htmlFor="choix" className='block mb-2 text-sm font-medium text-black-900 font-normal text-xs'>Type of leave</label>
                  <div className='relative'>
                   <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                    <img src={leaveTypeIcon} alt="this icon" />
                   </div>
                  <Field as="select" id="typeOfLeave" name="typeOfLeave" className="w-7/12 text-black font-normal h-10 flex items-center pl-8 text-xs border border-gray-300 rounded focus:outline-none cursor-pointer">
                    <option value="" disabled hidden>Select the leave type</option>
                    <option value="Sick">Sick</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Personal">Personal</option>
                    <option value="Casual">Casual</option>
                  </Field>
                  </div>
                  {touched.typeOfLeave && <ErrorMessage name='typeOfLeave' component={'div'} className="text-red-500 text-xs" />}
                </div>
                <div className='flex flex-col gap-y-2'>
                  <Input id='description' type="text" placeholder="Add more info about your leave" text="Description" name="description" logo={descriptionIcon} width='w-7/12' />
                  {touched.description && <ErrorMessage name='description' component={'div'} className="text-red-500 text-xs" />}
                </div>
                <div className="flex flex-col">
                <label htmlFor="choix" className='block text-sm font-medium text-black-900 font-normal text-xs'>Date</label>
                <div className='flex flex-col gap-4'>
                <Input
                    id="dateFrom"
                    name="dateFrom"
                    type="date"
                    placeholder="From"
                    logo={calendarIcon}
                    width='w-7/12' 
                  />
                  {touched.dateFrom && <ErrorMessage name='dateFrom' component={'div'} className="text-red-500 text-xs" />}
                </div>
                <div className='flex flex-col gap-4'>
                <Input
                    id="dateTo"
                    name="dateTo"
                    type="date"
                    placeholder="To"
                    logo={calendarIcon}
                    width='w-7/12' // Ajoutez une valeur initiale pour les champs de date
                  />
                  {touched.dateTo && <ErrorMessage name='dateTo' component={'div'} className="text-red-500 text-xs" />}
                </div>
                </div>
                <Button value='Apply For X Days Leave' width='w-7/12' />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
