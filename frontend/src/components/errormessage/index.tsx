import React from 'react';

interface Error {
	message: string;
}

function Errormessage({ message }: Error) {
	return (
		<p className='text-center py-2 absolute top-16 bg-red-500 text-sm text-white w-full font-semibold py-3'>
			{message}
		</p>
	);
}

export default Errormessage;
