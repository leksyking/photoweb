interface ButtonProps {
	children: string;
	onClick: () => void;
	disabled: boolean;
	type?: string
}


const ButtonWhite = ({ children, onClick, disabled ,type}: ButtonProps) => {
	return (
		<button
			className='bg-white shadow hover:bg-black rounded py-4 px-12 uppercase font-bold'
			onClick={onClick}
			// disabled={disabled}
			// type={type}
		>
			{children}
		</button>
	);
};

export default ButtonWhite;
