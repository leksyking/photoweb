import React from 'react';
import '../styles/Home.css';
// import PostCard from '../components/PostCard';
// import FollowCard from '../components/FollowCard';
// // import Footer from '../components/Footer';
// import Big from '../assests/big.png';
// import Small from '../assests/small.png';

function Home() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className=' text-center font-bold uppercase'>
				<h1 className='text-5xl md:text-7xl lg:text-9xl mb-2'>
					Photography
				</h1>
				<h2>Made Easy</h2>
			</div>

			{/* <div className='relative mt-10 '>
				<h2 className='uppercase text-3xl md:text-5xl font-bold mb-3 md:mb-5 stroke'>
					Mission
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div className='col-span-2'>
						<div className='relative'>
							<img src={Big} alt='Big' />
							<img src={Small} alt='Big' className='absolute top-28 right-10' />
						</div>
					</div>
					<div>
						<div className='text-base font-bold'>
							Lorem ipsum dolor sit amet{' '}
						</div>
						<p className='tracking-wide text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
							quis ornare pharetra tristique aliquam convallis magnis urna,
							laoreet. Orci, vel fermentum laoreet nibh metus. Sed augue turpis
							nunc viverra urna, venenatis. Morbi lacus urna hendrerit arcu
							proin non. Facilisis bibendum neque.
						</p>
					</div>
				</div>
			</div> */}
		</div>
		// <div className="home  body">
		//     {/* #C33764  #1D2671*/}
		//     <div className="row">
		//         <div className="col-lg-8 col-md-7 col-xs-12">
		//             <div style={{"marginTop" : "8%"}}>
		//                 <PostCard/>
		//                 <PostCard/>
		//                 <PostCard/>
		//             </div>

		//         </div>

		//         <div className="col-lg-4 col-md-5 col-xs-12">
		//             <div className="sidebar " >
		//                 <div style={{fontWeight: "bold", fontSize: "15px", marginBottom: "2px"}}>
		//                    People
		//                 </div>
		//                 <FollowCard/>
		//                 <FollowCard/>
		//                 <Footer/>
		//             </div>
		//         </div>
		//     </div>
		// </div>
	);
}

export default Home;
