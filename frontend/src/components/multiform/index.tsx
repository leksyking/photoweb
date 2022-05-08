import { useState } from 'react';
import { Formik, FormikProps } from 'formik';
import { Steps, StepsProvider, useSteps } from 'react-step-builder';
import Confirm from './Confirm';
import Personal from './Personal';
import ShotDetails from './ShotDetails';
import Socials from './Socials';
import * as Yup from 'yup';
import axios from 'axios'

const UserMultiForm = () => {
	return (
		<StepsProvider>
			<MySteps />
		</StepsProvider>
	);
};

interface multiFormProps {
	firstName: string;
	lastName: string;
	email: string;
	description: string;
	username: string;
	state: string;
	city: string;
	zip: string;
	password: string;
	shootDetails: string[];
	whatsapp: string;
	instagram: string;
	linkedIn: string;
	twitter: string;
}
const MySteps = () => {
	const { next, prev } = useSteps();
	const [formFailed, setFormFailed] = useState(false);

	const nextProps = {
		next: next,
	};
	const prevProps = {
		prev,
	};
	const intialValues: multiFormProps = {
		firstName: '',
		lastName: '',
		email: '',
		description: '',
		username: '',
		state: '',
		city: '',
		zip: '',
		password: '',
		shootDetails: [],
		whatsapp: '',
		instagram: '',
		linkedIn: '',
		twitter: '',
	};

	const validateYupSchema = Yup.object({
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
		description: Yup.string()
			.required('Pls write something to describe you!')
			.max(250, 'Maximum character is 250')
			.min(50, 'Minimum character is 50'),
		zip: Yup.string().required('Pls enter your zip code!'),
		city: Yup.string().required('Please, fill this field!'),
		state: Yup.string().required('Please, fill this field!'),
		shootDetails: Yup.array().required('Please pick at least one speciality!'),
		whatsapp: Yup.string().required('Please fill this field!'),
		twitter: Yup.string().required('Please, fill this field!'),
		linkedIn: Yup.string().required('Please, fill this field'),
		instagram: Yup.string().required('Please, fill this field'),
	});

	const handleSubmit = (values: multiFormProps) => {
		console.log({ values });
		try {
			const res = axios.post('http://localhost:5000/api/v1/auth/login', values, {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});

			if(!res){
				setFormFailed(true)
			}
			setFormFailed(false);
		} catch (error) {
			setFormFailed(true);
		}
	};

	return (
		<Formik
			initialValues={intialValues}
			validationSchema={validateYupSchema}
			onSubmit={handleSubmit}
		>
			{(props: FormikProps<multiFormProps>) => {
				const { values } = props;

				return (
					<Steps>
						<Personal {...nextProps} {...prevProps} values={values} />
						<ShotDetails {...nextProps} {...prevProps} values={values} />
						<Socials {...nextProps} {...prevProps} values={values} />
						<Confirm {...nextProps} {...prevProps} />
					</Steps>
				);
			}}
		</Formik>
	);
};

export default UserMultiForm;
