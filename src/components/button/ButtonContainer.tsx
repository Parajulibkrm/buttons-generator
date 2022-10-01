import { Button } from './Button';

export const ButtonContainer = (): JSX.Element => {
	return (
		<section className="w-full grid place-content-center content-center p-12 bg-button-section-bg bg-cover bg-no-repeat">
			<Button />
		</section>
	)
}
