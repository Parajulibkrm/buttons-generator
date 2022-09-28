import { createContext } from "react";
import { ButtonContextType } from "../types/ButtonTypes";

export const ButtonCtx = createContext<ButtonContextType | null>(null);

export const buttonContext: ButtonContextType = {
    buttonStyle: 'cyberpunk',
    copyText: '#fff'
}




