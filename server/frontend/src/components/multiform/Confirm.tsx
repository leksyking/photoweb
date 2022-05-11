import ConfirmPics from '../../assests/confirm.svg';
import ButtonWhite from '../buttons/ButtonWhite';

interface multiProps {
	next: () => void;
	prev: () => void;
}

const Confirm = ({ next, prev }: multiProps) => {
	return (
		<div className='p-10 lg:p-28 text-center '>
			Confirm
			<div className='flex justify-center items-center'>
				<img src={ConfirmPics} alt='Confirm' className='h-3/4' />
			</div>
			<h3 className='text-2xl lg:text-4xl text-black uppercase font-bold mt-5 mb-3 '>
				CONFIRMATION
			</h3>
			<p className='text-sm text-black uppercase font-medium lg:w-3/4 mx-auto'>
				PLS MAKE SURE YOUR DETAILS ARE WELL FILLED. yOU CAN ALWAYS EDIT IT
				LATER. rEADY TO START THE JORUNERY? MAKE SURE TO TICK THE CHECKBOX BELOW
				FOR CONFIRMATION OF PRIVATE POLICY
			</p>
			<div className='flex justify-center form-check my-3 items-center gap-2'>
				<input
					className='h-3 w-3 border border-gray-300 rounded-sm bg-white checked:bg-black m-0'
					type='checkbox'
					value=''
					id='flexCheckDefault'
					onChange={() => {}}
				/>

				<label
					className='text-lg text-black uppercase font-bold '
					htmlFor='flexCheckDefault'
				>
					DO YOU AGREE TO OUR POLICIES?
				</label>
			</div>
			<div className='flex flex-cols justify-between mt-5 align-center'>
				<ButtonWhite onClick={prev} disabled={true} type="text">
					Prev
				</ButtonWhite>
				<ButtonWhite onClick={next} disabled={false} type="text">
					Next
				</ButtonWhite>
				<button className='text-black font-bold' type='submit'> Submit</button>
			</div>
		</div>
	);
};

export default Confirm;
