import { ButtonProps } from '../../types/ButtonTypes';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { copiedAlert } from '../../utils/copiedAlert';

import { ButtonToast } from './ButtonToast';

export const Button = ({ styleButton }: ButtonProps): JSX.Element => {
	const styleToCopy: string = 'Hello World!';
	
	return (
		<>
			<CopyToClipboard text={styleToCopy}>
				<button className={styleButton} onClick={copiedAlert}>
					Hello World
				</button>
			</CopyToClipboard>
			<ButtonToast />
		</>
	)
}
