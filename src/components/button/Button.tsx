import { useContext } from 'react';
import { ButtonCtx } from '../../context/ButtonContext';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { copiedAlert } from '../../utils/copiedAlert';

import { ButtonToast } from './ButtonToast';

export const Button = (): JSX.Element => {

	const { copy, style } = useContext(ButtonCtx);

	return (
		<>
			<CopyToClipboard text={copy}>
				<button className={style || 'normal'} onClick={copiedAlert}>
					Hello World
				</button>
			</CopyToClipboard>
			<ButtonToast />
		</>
	)
}
 