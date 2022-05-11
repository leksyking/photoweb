import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Nav.css';
import Menu from '../assests/menu.svg';

function Nav() {
	return (
		<nav className='w-full py-3 px-4 bg-white fixed shadow-md z-40'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-1'>
					<img src={Menu} alt='' />
					<h3 className='uppercase text-sm font-semibold'>Menu</h3>
				</div>
				<div className='font-bold text-xl'>
					<Link to="/" className="hover:text-black">P.</Link>
				</div>
				<div className='font-semibold uppercase text-sm'>
					<Link to="/login">
						<span className="text-black hover:text-black">Register/Login</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
