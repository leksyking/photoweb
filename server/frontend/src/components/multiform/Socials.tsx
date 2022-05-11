import InputField from '../Input';
import { SocialProps } from '../../types';
import ButtonWhite from '../buttons/ButtonWhite';

interface multiProps {
	next: () => void;
	prev: () => void;
	values: SocialProps;
}

const Socials = ({ next, prev, values }: multiProps) => {
	return (
		<div className='p-10 lg:p-28'>
			socials
			<div className=' flex flex-col w-full justify-center items-center'>
				<div className='w-full'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
						<InputField
							placeholder='Paste Link here'
							name='linkedIn'
							value={values.linkedIn}
						/>
						<InputField
							placeholder='Paste Link here'
							name='whatsapp'
							value={values.whatsapp}
						/>
						<InputField
							placeholder='Paste Link here'
							name='twitter'
							value={values.twitter}
						/>
						<InputField
							placeholder='Paste Link here'
							name='instagram'
							value={values.instagram}
						/>
					</div>
				</div>
			</div>
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

export default Socials;
