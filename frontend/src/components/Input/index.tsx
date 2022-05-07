import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface TextProps {
	value: string;
	placeholder: string;
	name: string;
}

function Text({ value, placeholder, name }: TextProps) {
	return (
		<div className='mb-4'>
			<label
				htmlFor={name}
				className='block text-gray-700 uppercase text-sm uppercase font-bold mb-2'
			>
				{name}
			</label>
			<Field
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				className='shadow appearance-none border rounded w-full py-3 h-[100px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
			/>
			<ErrorMessage
				component='div'
				name={name}
				className='text-red-500 py-2 absolute text-xs italic'
			/>
		</div>
	);
}

export default Text;
