import axios from 'axios';
import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import InputField from '../components/Input';
import { Link } from 'react-router-dom';
import Errormessage from '../components/errormessage';

interface RegisterValues {
	email: string;
	password: string;
	username: string;
	firstName: string;
	lastName: string;
	confirmPassword: string;
}


const validationSchema = Yup.object({
	email: Yup.string()
		.required('Please, fill this field!')
		.email('Email is invalid')
		.label('Email'),
	password: Yup.string().min(5, 'Password must be at least  5 characters'),
	username: Yup.string()
		.max(16, 'Username must be not exceed 16 characters')
		.min(6, 'Username must be at least 6 characters')
		.required('Please, fill this field!'),
	firstName: Yup.string().required('Please, fill this field!'),
	lastName: Yup.string().required('Please, fill this field!'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Password must match')
		.required('Please, fill this field!'),
});

const Register: React.FC<{}> = () => {
	const [RegisterFailed, setRegisterFailed] = useState(false);
	const intialValues: RegisterValues = {
		email: '',
		password: '',
		username: '',
		firstName: '',
		lastName: '',
		confirmPassword: '',
	};

	const handleSubmit = async ({
		email,
		password,
		username,
		firstName,
		lastName,
	}: RegisterValues) => {
		try {
			const res = await axios.post(
				'http://localhost:5000/api/v1/auth/register',
				{ email, password, username, firstName, lastName },
				{
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				}
			);
			console.log({ res });

			if (!res) {
				setRegisterFailed(true);
			}
			setRegisterFailed(false);
		} catch (error) {
			setRegisterFailed(true);
            
            
		}
	};
	return (
		<>
			{RegisterFailed ? (
				<Errormessage message='Registration failed! Please try again!' />
			) : null}
			<div className='flex items-center justify-center pt-28'>
				<Formik
					initialValues={intialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{(props: FormikProps<RegisterValues>) => {
						const { values } = props;
						return (
							<Form className='w-full md:w-2/4 mb-5'>
								<h3 className='text-center uppercase font-bold my-1 text-xl'>
									Register
								</h3>
								<div className='bg-white  shadow-md rounded px-3 gap:0 md:px-8 pt-6 pb-8 mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2'>
									<InputField
										value={values.firstName}
										placeholder='First Name'
										name='firstName'
									/>
									<InputField
										value={values.lastName}
										placeholder='Last Name'
										name='lastName'
									/>
									<InputField
										value={values.username}
										placeholder='Username'
										name='username'
									/>
									<InputField
										value={values.email}
										placeholder='Email'
										name='email'
									/>
									<InputField
										value={values.password}
										placeholder='Password'
										name='password'
									/>
									<InputField
										value={values.confirmPassword}
										placeholder='Confirm Password'
										name='confirmPassword'
									/>
								</div>

								<button
									type='submit'
									className='w-full text-center text-white bg-black py-2 rounded mb-2 font-semibold uppercase text-sm'
								>
									Register
								</button>

								<div className='text-center text-sm py-2 '>
									Have an account already?{' '}
									<Link to='/login' className='text-blue-500'>
										Login
									</Link>
								</div>
								<p className='py-1 text-xs text-center'>
									James Okunola | Felix Ogundipe
								</p>
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default Register;
