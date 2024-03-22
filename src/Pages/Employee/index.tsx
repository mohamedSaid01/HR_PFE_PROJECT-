import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import plusIcon from '../../Assets/Icons/plusIcon.svg'


function Employee() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(URL.createObjectURL(files[0]));
    }
  };
  
  return (
    <div>
      <Formik
        initialValues={{
          file: '',
          email: '',
          fullName: '',
          adress: '',
          phoneNumber1: '',
          phoneNumber2: '',
          jobTitle: '',
          workingDays: '',
          leaveBalance: '',
          leaveRatePerMonth: '',
          Gender: '',
          Departement: '',
          Status: '',
          birthday: '',
          hiringDate: '',
        }}
        validationSchema={Yup.object().shape({
          file: Yup.string(),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          fullName: Yup.string().required('Full Name is required'),
          adress: Yup.string().required('Adress is required'),
          phoneNumber1: Yup.string().required('Phone Number is required').matches(/^[0-9]{8}$/, 'Le numéro de téléphone doit comporter exactement 8 chiffres'),
          phoneNumber2: Yup.string().matches(/^[0-9]{8}$/, 'Le numéro de téléphone doit comporter exactement 8 chiffres'),
          birthday: Yup.date().required('Birthday is required'),
          hiringDate: Yup.date().required('Hiring Date is required'),
          jobTitle: Yup.string().required('Job Title is required'),
          workingDays: Yup.string().required('Working Days is required'),
          leaveBalance: Yup.string().required('Leave Balance is required'),
          leaveRatePerMonth: Yup.string().required('Leave Rate Per Month is required'),
          Gender: Yup.string().required('Gender is required'),
          Departement: Yup.string().required('Departement is required'),
          Status: Yup.string().required('Status is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
      >
        {({ errors, touched }) => (
          <Form className='flex flex-col gap-y-6'>
            <div className='flex flex-col gap-5'>
             <p>Profil Photo</p>
           <div className='flex  items-center justify-between ' >
           <div className="flex flex-row items-center gap-5" >
            <div  className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer'>
            {selectedFile ? (
                      <img src={selectedFile} alt="selected image" className='w-20 h-20 rounded-full'/>
                    ) : (
                      <img src={plusIcon} alt="plus icon"/>
                    )}
            </div>
          <Field
            type="file"
            name="file"
            id="custom-input"
            onChange={handleFileChange}
            hidden
          />
          <div className='flex justify-center items-center gap-4'>
             <label
                htmlFor="custom-input"
                className="block text-xs text-black-100  py-2 px-5
                  rounded-lg border border border-gray-300 font-medium
                  cursor-pointer hover:bg-gray-400 hover:text-white w-28"
                >
                Choose File
           </label>
        <label className="text-xs text-black">
          {selectedFile ? selectedFile : "No file chosen"}
        </label>
          </div>
      </div>
              <Button value='Upload' width='w-36' />           
             </div>
            </div>

            <div className='flex flex-col gap-14'>
             <div className='flex flex-col gap-5'>
                <p>Personal Info</p>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                      <Input type="text"  name="fullName" text="Full Name" width="w-60" />
                      {touched.fullName && errors.fullName && <div className="text-red-500 text-xs">{errors.fullName}</div>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Input type="email"  name="email" text="Email" width="w-60" />
                        {touched.email && errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
                    </div>
                <div className='flex flex-col gap-y-2'>
                  <label htmlFor="Gender" className='block mb-2 text-sm font-medium text-black-900 font-normal text-xs'>Gender</label>
                  <div className='relative'>
                   <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                   </div>
                  <Field as="select" id="Gender" name="Gender" className="w-60 text-black font-normal h-10 flex items-center pl-8 text-xs border border-gray-300 rounded-lg focus:outline-none cursor-pointer">
                    <option value="" disabled hidden>Select</option>
                    <option value="Sick">male</option>
                    <option value="Vacation">female</option>
                  </Field>
                  </div>
                  {touched.Gender && <ErrorMessage name='Gender' component={'div'} className="text-red-500 text-xs" />}
                </div>
                <div className='flex flex-col gap-2'>
                    <Input type="date"  name="birthday" text="Birthday" width="w-60" />
                    {touched.birthday && errors.birthday && <div className="text-red-500 text-xs">{errors.birthday}</div>}
                </div>
                </div>
                <div  className='flex gap-10'>
                  <div className='flex flex-col gap-2'>
                    <Input type="text"  name="adress" text="Address" width="w-60" />
                    {touched.adress && errors.adress && <div className="text-red-500 text-xs">{errors.adress}</div>}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Input type="text"  name="phoneNumber1" text="Phone Number 1" width="w-60" />
                    {touched.phoneNumber1 && errors.phoneNumber1 && <div className="text-red-500 text-xs">{errors.phoneNumber1}</div>}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Input type="text"  name="phoneNumber2" text="Phone Number 2 (Optional)" placeholder='+216 20 000 000' width="w-60" />
                    {touched.phoneNumber2 && errors.phoneNumber2 && <div className="text-red-500 text-xs">{errors.phoneNumber2}</div>}
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <p>Professional Info</p>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                      <Input type="text"  name="jobTitle" text="Job Title" width="w-60" />
                      {touched.jobTitle && errors.jobTitle && <div className="text-red-500 text-xs">{errors.jobTitle}</div>}
                    </div>
                <div className='flex flex-col gap-y-2'>
                  <label htmlFor="Departement" className='block mb-2 text-sm font-medium text-black-900 font-normal text-xs'>Departement</label>
                  <div className='relative'>
                   <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                   </div>
                  <Field as="select" id="Departement" name="Departement" className="w-60 text-black font-normal h-10 flex items-center pl-8 text-xs border border-gray-300 rounded-lg focus:outline-none cursor-pointer">
                    <option value="" disabled hidden>Select</option>
                    <option value="Sick">Design Deparment</option>
                    <option value="Vacation">Development Department</option>
                  </Field>
                  </div>
                  {touched.Departement && <ErrorMessage name='Departement' component={'div'} className="text-red-500 text-xs" />}
                </div>
                <div className='flex flex-col gap-y-2'>
                  <label htmlFor="Status" className='block mb-2 text-sm font-medium text-black-900 font-normal text-xs'>Status</label>
                  <div className='relative'>
                   <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                   </div>
                  <Field as="select" id="Status" name="Status" className="w-60 text-black font-normal h-10 flex items-center pl-8 text-xs border border-gray-300 rounded-lg focus:outline-none cursor-pointer">
                    <option value="" disabled hidden>Select</option>
                    <option value="Sick">Approved</option>
                    <option value="Vacation">Rejected</option>
                    <option value="Sick">Waiting for employee to negotiate</option>
                  </Field>
                  </div>
                  {touched.Status && <ErrorMessage name='Status' component={'div'} className="text-red-500 text-xs" />}
                </div>
                <div className='flex flex-col gap-2'>
                  <Input type="date"  name="hiringDate" text="Hiring Date" width="w-60" />
                  {touched.hiringDate && errors.hiringDate && <div className="text-red-500 text-xs">{errors.hiringDate}</div>}
                </div>
                </div>
                <div  className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                      <Input type="text"  name="workingDays" text="Working Days" width="w-60" />
                      {touched.workingDays && errors.workingDays && <div className="text-red-500 text-xs">{errors.workingDays}</div>}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Input type="text"  name="leaveBalance" text="Leave balance" width="w-60" />
                      {touched.leaveBalance && errors.leaveBalance && <div className="text-red-500 text-xs">{errors.leaveBalance}</div>}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Input type="text"  name="leaveRatePerMonth" text="Leave Rate per month" width="w-60" />
                      {touched.leaveRatePerMonth && errors.leaveRatePerMonth && <div className="text-red-500 text-xs">{errors.leaveRatePerMonth}</div>}  
                    </div>
                </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>    
    </div>
  );
}

export default Employee;