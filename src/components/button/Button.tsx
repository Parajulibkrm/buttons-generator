import { useContext } from 'react';
import { ButtonCtx } from '../../context/ButtonContext';

import { ButtonProps } from '../../types/ButtonTypes';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { copiedAlert } from '../../utils/copiedAlert';

import { ButtonToast } from './ButtonToast';

export const Button = ({ styleButton }: ButtonProps): JSX.Element => {

	const { copy } = useContext(ButtonCtx);

	return (
		<>
			<CopyToClipboard text={copy}>
				<button className={styleButton} onClick={copiedAlert}>
					Hello World
				</button>
			</CopyToClipboard>
			<ButtonToast />
		</>
	)
}
 