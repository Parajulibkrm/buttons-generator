import { useContext } from 'react';
import { ButtonCtx } from '../../context/ButtonContext';
import { Button } from "./Button";

export const ButtonContainer = (): JSX.Element => {

  const buttonContext = useContext(ButtonCtx);

  return (
    <section className="w-full grid place-content-center content-center p-12">
        <Button styleButton={buttonContext?.buttonStyle} />
    </section>
  )
}
