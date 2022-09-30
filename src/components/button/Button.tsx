import { ButtonProps } from '../../types/ButtonTypes';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

export const Button = ({ styleButton }: ButtonProps): JSX.Element => {
	
	const styleToCopy: string = 'Hello World!';

	return (
		<>
			<CopyToClipboard text={styleToCopy}>
				<button
					className={styleButton}
					onClick={() => toast('Texto copiado', { position: 'bottom-center' })}
				>
					Hello World
				</button>
			</CopyToClipboard>
			<Toaster
				toastOptions={{
					style: {
						background: 'green',
						color: 'white',
						fontWeight: 'bold',
					},
				}} />
		</>
	)
}
