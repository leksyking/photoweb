import React, { useState } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import InputField from '../components/Input';
import axios from 'axios';
import * as Yup from 'yup';
import Errormessage from '../components/errormessage';
import {Link} from 'react-router-dom'

interface MyFormValues {
	email: string;
	password: string;
}

const validationSchema = Yup.object({
	email: Yup.string()
		.required('Email is required.')
		.email('Email is invalid.')
		.label('Email'),
	password: Yup.string()
		.required()
		.min(5, 'Password must be at least 5 charcters.')
		.label('Password'),
});

const Login: React.FC<{}> = () => {
	const [loginFailed, setloginFailed] = useState(false);

	const initialValues: MyFormValues = { email: '', password: '' };

	const handleSubmit = async (values: MyFormValues) => {
		try {
			const res = await axios.post(
				'http://localhost:5000/api/v1/auth/login',
				values,
				{
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
					},
				}
			);

			if (!res) {
				setloginFailed(true);
			}
			setloginFailed(false);
		} catch (error) {
			setloginFailed(true);
		}
	};
	return (
		<div>
			{loginFailed ? (
				<Errormessage message='Email/Password is not correct' />
			) : null}
			<div className='flex items-center justify-center h-screen '>
				<div className=' col-lg-4 col-md-6 col-xs-12'>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{(props: FormikProps<MyFormValues>) => {
							const { values } = props;

							return (
								<Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
									<InputField
										value={values.email}
										placeholder='Email'
										name='email'
									/>
									{/* {errors? <p className='text-red-500'>{errors.email}</p> : null} */}
									<InputField
										value={values.password}
										placeholder='Password'
										name='password'
									/>
									<button
										type='submit'
										className='w-full text-center text-white bg-black py-2 rounded mb-2 font-semibold uppercase text-sm'
									>
										Login
									</button>
									<div className='flex justify-between text-sm py-2 text-blue-500'>
										<Link to="/forgetpassword">Forget Password?</Link>
										<Link to="/register" >Register</Link>
									</div>
									<p className='py-1 text-xs text-center'>
										James Okunola | Felix Ogundipe
									</p>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Login;
