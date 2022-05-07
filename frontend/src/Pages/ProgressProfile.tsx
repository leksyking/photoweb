import React, { useState } from 'react';
import ProgressStep from '../components/ProgressStep';
import PrevNext from '../components/PrevNext';
import { PhotographersData } from '../types/registerPhoto';

const defaultValues = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	password: '',
	description: '',
	state: '',
	city: '',
	zip: '',
};

function ProgressLevel() {
	// const [loading, setLoading] = useState(false);
	const [values, setvalues] = useState<PhotographersData | null>(defaultValues);
	const [step, setstep] = useState(1);

	const nextState = () => {
		setstep((prev) => prev + 1);
	};
	const prevState = () => {
		setstep((prev) => prev -1);
	};

	return (
		<div className='body'>
			<ProgressStep />

			{/* PROFILE FORM */}
			<form className='w-full mt-3'>
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-first-name'
						>
							First Name
							<span className='text-red-500'>*</span>
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							id='grid-first-name'
							type='text'
							placeholder='Jane'
						/>
						<p className='text-red-500 mbtext-xs mb-1 italic'>
							Please fill out this field.
						</p>
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-last-name'
						>
							Last Name
							<span className='text-red-500'>*</span>
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-last-name'
							type='text'
							placeholder='Doe'
						/>
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-last-name'
						>
							Username
							<span className='text-red-500'>*</span>
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-last-name'
							type='text'
							placeholder='Doe'
						/>
					</div>
				</div>
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-password'
						>
							Description
						</label>
						<textarea
							className='form-textarea appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							// rows='3'
							placeholder='Enter some long form content.'
						></textarea>
						<p className='text-gray-600 my-1 text-xs italic'>
							Sell yourself to your customers
						</p>
					</div>
				</div>
				<div className='flex flex-wrap -mx-3 mb-2'>
					<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-state'
						>
							State
						</label>
						<div className='relative'>
							<select
								className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-state'
							>
								<option>Ekiti</option>
								<option>Ondo</option>
								<option>Osun</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
								>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-state'
						>
							City
						</label>
						<div className='relative'>
							<select
								className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-state'
							>
								<option>New Mexico</option>
								<option>Missouri</option>
								<option>Texas</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
								>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-zip'
						>
							Zip
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-zip'
							type='text'
							placeholder='90210'
						/>
					</div>
				</div>
			</form>

			<PrevNext />
		</div>
	);
}

export default ProgressLevel;
