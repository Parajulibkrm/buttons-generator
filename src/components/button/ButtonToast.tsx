import { Toaster } from 'react-hot-toast';

export const ButtonToast = (): JSX.Element => {
	return (
		<Toaster
			toastOptions={{
				style: {
					background: 'green',
					color: 'white',
					fontWeight: 'bold',
				},
			}}
		/>
	);
};
