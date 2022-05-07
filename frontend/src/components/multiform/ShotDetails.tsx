import ButtonWhite from '../../components/buttons/ButtonWhite';
import { useState } from 'react';
import shootCheckbox from '../../utils/shotCheckbox';

interface multiProps {
	next: () => void;
	prev: () => void;
}


const ShotDetails = ({ next, prev }: multiProps) => {
	const [checked, setChecked] = useState<any[]>([]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
		const isChecked = checked.some(checkbox => checkbox.value === event.target.value);
		if(isChecked){
			setChecked(checked.filter(checkedBoxFiltered => checkedBoxFiltered.value !== event.target.value))
		}else{
			setChecked(checked.concat(event.target.value));
		}
	};

	return (
		<div className='p-28'>
			{shootCheckbox.map((box, index) => {
				return (
					<div key={index} className='flex gap-2 items-center'>
						<input
							type='checkbox'
							id={`checkbox-${index}`}
							name={box.value}
							value={box.value}
							checked={checked.some(checkbox => checkbox.value === box.value)}
							onChange={handleInputChange}
						/>
						<label htmlFor={`checkbox-${index}`} className="uppercase font-semibold">{box.value}</label>

					</div>
				);
			})}
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

export default ShotDetails;
