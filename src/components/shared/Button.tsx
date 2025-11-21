import type { ButtonProps } from "../../types/types";

function Button({ children, version = 'primary', type = 'button', isDisabled = false }: ButtonProps) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

export default Button;
