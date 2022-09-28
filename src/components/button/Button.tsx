import { ButtonProps } from "../../types/ButtonTypes";

export const Button = ({ styleButton }:ButtonProps): JSX.Element => {
	return (
		<button className={styleButton}>Hello World</button>
	)
}
