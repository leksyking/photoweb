import ButtonWhite from '../../components/buttons/ButtonWhite';
import { useState } from 'react';
import shootCheckbox from '../../utils/shotCheckbox';
import { PersonalProps } from '../../types';

interface multiProps {
	next: () => void;
	prev: () => void;
	values: PersonalProps;
}

const ShotDetails = ({ next, prev, values }: multiProps) => {
	const [value, setValue] = useState<any[]>([]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();
		const { value, checked } = event.target || {};
		console.log({value});
		

		setValue((prevChecked) => {
			let newValues = [...prevChecked];
			if (checked) {
				newValues.push(value);
			} else {
				newValues = newValues.filter((item) => item !== value);
			}

			return newValues;
		});
	};

	console.log({value});
	

	return (
		<div className='p-28'>
			{shootCheckbox.map(({value}, index) => {
				return (
					<div key={index} className='flex gap-2 items-center'>
						<input
							type='checkbox'
							id={`checkbox-${index}`}
							value={value}
							onChange={handleInputChange}
						/>
						<label
							htmlFor={`checkbox-${index}`}
							className='uppercase font-semibold'
						>
							{value}
						</label>
					</div>
				);
			})}
			<div className='flex flex-cols justify-between mt-5 align-center'>
				<ButtonWhite onClick={prev} disabled={true} type="text">
					Prev
				</ButtonWhite>
				<ButtonWhite onClick={next} disabled={false} type="text">
					Next
				</ButtonWhite>
			</div>
		</div>
	);
};

export default ShotDetails;
