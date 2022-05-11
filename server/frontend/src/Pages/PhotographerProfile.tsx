import CoverImage from '../assests/cover__image.png';
import WhatsappIcon from '../assests/New folder/what.svg';
import LinkedlnIcon from '../assests/New folder/linkedln.svg';
import TwitterIcon from '../assests/New folder/twitter.svg';
import IGIcon from '../assests/New folder/ig.svg';
import Star from '../assests/star.svg';
import { Link } from 'react-router-dom';
import ProfilePics from '../assests/profile__image.jpg';

const Profile = () => {
	return (
		<div className='p-28'>
			<div className='shadow-md rounded rounded-lg relative'>
				<img src={CoverImage} alt='CoverImage' width='100%' />
				<div className='absolute top-20 left-10'>
					<img
						src={ProfilePics}
						alt='Profile '
						width='100%'
						className='rounded-full object-cover border-3 w-40 h-40 '
					/>
				</div>

				<div className='pb-10 pt-20 px-5'>
					<div className='mt-2 uppercase flex justify-between font-bold '>
						<div className='uppercase roboto text-2xl'>James Okunola</div>
						<div className='flex items-center '>
							<p>5.0</p>
							<img src={Star} alt='Star' width='50%' />
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='text-black '>Wedding | Birthday | Event</div>
						<p className='text-gray-500 italic text-sm '>
							Ibadan Iwo-Road, Osgobo, Osun State
						</p>
						<div className='flex items-center mt-2 gap-2'>
							<Link to=''>
								<img src={LinkedlnIcon} alt='Linkedln Icon' />
							</Link>
							<Link to=''>
								<img src={TwitterIcon} alt='Linkedln Icon' />
							</Link>
							<Link to=''>
								<img src={IGIcon} alt='Linkedln Icon' />
							</Link>
							<Link to=''>
								<img src={WhatsappIcon} alt='Linkedln Icon' />
							</Link>
						</div>

						<p className='py-3 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
							neque facilisis volutpat netus pretium elit, nullam pharetra,
							convallis. Ut dui quis pharetra eu vitae. Arcu rutrum amet amet,
							consequat et eget eget diam amet. Suspendisse imperdiet consequat
							varius risus eu ac. Non est lacus, id amet. Erat luctus nec amet,
							pharetra. Phasellus scelerisque scelerisque eget tortor proin
							viverra orci nec aliquam. Egestas amet, aliquam ut pellentesque
							sed amet. Aliquet est neque sem lobortis id ut. Libero consequat
							euismod scelerisque malesuada ornare non felis diam. Facilisi
							senectus pretium maecenas lorem eget. Risus erat eleifend nibh
							eros vel. Velit diam eleifend amet enim suspendisse magna commodo
							faucibus feugiat. Proin ut condimentum elit duis ornare volutpat
							lobortis.
						</p>
					</div>
				</div>
			</div>
      <div></div>
		</div>
	);
};

export default Profile;
