export type ButtonProps = {
    styleButton : string;
}

export type ButtonContextType = {
    style: string;
    copy: string;
    changeStyle: Function;
}

export type stylesObj = {
    name: string;
    styles: string;
}

export type Props = {
    children: React.ReactNode,
}