import { useContext } from 'react';
import { ButtonCtx } from '../../context/ButtonContext';
import { buttons } from '../../data/Buttons';

export const OptionsList = (): JSX.Element => {
	const { changeStyle } = useContext(ButtonCtx);

	return (
		<section className="my-4">
			<ul className="flex flex-col items-center space-y-5 list-none">
				{buttons.map((button) => (
					<li
            			key={button.id}
						className="items__list"
						id={button.name}
						onClick={(e) => changeStyle(e)}>
						{button.button}
					</li>
				))}
			</ul>
		</section>
	)
}
