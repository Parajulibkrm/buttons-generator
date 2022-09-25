import { createContext } from "react";

interface ButtonContextInterface  {
    stylesClass: string;
    font: string;
}

export const ButtonContext = createContext<ButtonContextInterface | null>(null);

