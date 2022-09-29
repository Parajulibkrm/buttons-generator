import { createContext, useState } from 'react';
import { ButtonContextType, Props } from '../types/ButtonTypes';

const defaultState = {
    style: '',
    changeStyle: (style:'string') => {}
}

export const ButtonCtx = createContext<ButtonContextType>(defaultState);

export const ButtonContextProvider: React.FC<Props> = ({ children }) => {
	const [style, setStyle] = useState(defaultState.style);

	const changeStyle = (e: any) => {
		setStyle(e.target.id);
	}

	return (
		<ButtonCtx.Provider value={{ style, changeStyle }}>
			{children}
		</ButtonCtx.Provider>
	)
}


