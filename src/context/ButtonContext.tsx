import { createContext, useState } from 'react';
import { ButtonContextType, Props, stylesObj } from '../types/ButtonTypes';
import { buttons } from '../data/Buttons';

const defaultState = {
    style: '',
	copy: '',
    changeStyle: (style:'string') => {},
	setStyleToCopy: (el:'string') => {},
}

export const ButtonCtx = createContext<ButtonContextType>(defaultState);

export const ButtonContextProvider: React.FC<Props> = ({ children }) => {
	const [style, setStyle] = useState(defaultState.style);
	const [copy, setCopy] = useState(defaultState.copy);

	const changeStyle = (e: any) => {
		setStyle(e.target.id);
		const element:stylesObj | any = buttons.find(button => button.name === e.target.id);
		const { styles } = element;
		setCopy(styles);
	}

	return (
		<ButtonCtx.Provider value={{ style, changeStyle, copy }}>
			{children}
		</ButtonCtx.Provider>
	)
}


