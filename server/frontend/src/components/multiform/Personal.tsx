import React from 'react';
import ButtonWhite from '../buttons/ButtonWhite';
import InputField from '../Input';
import TextField from '../Input/TextInput';
import { PersonalProps } from '../../types';

interface nextProps {
	next: () => void;
	prev: () => void;
	values: PersonalProps;
}

const Personal = ({ next, values, prev }: nextProps) => {
	return (
		<div className='p-10 lg:p-28 flex flex-col w-full justify-center align-center'>
			{' '}
			Personal
			<div className=''>
				<div className='grid grid-cols-1 md:grid-cols-2  md:gap-8 lg:gap-8 '>
					<InputField
						placeholder='First Name'
						name='firstName'
						value={values.firstName}
					/>
					<InputField
						placeholder='Last Name'
						name='lastName'
						value={values.lastName}
					/>
					<InputField placeholder='Email' name='email' value={values.email} />
					<InputField
						placeholder='Username'
						name='username'
						value={values.username}
					/>
				</div>

				<TextField
					placeholder='Description'
					name='description'
					value={values.description}
				/>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<InputField placeholder='Osun' name='state' value={values.state} />
					<InputField placeholder='Osogbo' name='city' value={values.state} />
					<InputField placeholder='12312' name='zip' value={values.zip} />
				</div>
			</div>
			<div className='flex flex-cols justify-between mt-5 align-center'>
				<ButtonWhite onClick={prev} disabled={true}>
					Prev
				</ButtonWhite>
				<ButtonWhite onClick={next} disabled={false}>
					Next
				</ButtonWhite>
			</div>
		</div>
	);
};

export default Personal;
