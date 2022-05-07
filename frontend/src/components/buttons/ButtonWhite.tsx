interface ButtonProps {
	children: string;
	onClick: () => void;
	disabled: boolean;
}
const ButtonWhite = ({ children, onClick, disabled }: ButtonProps) => {
	return (
		<div
			className='bg-white shadow hover:bg-black rounded py-4 px-12 uppercase font-bold'
			onClick={onClick}
			// disabled={disabled}
		>
			{children}
		</div>
	);
};

export default ButtonWhite;
