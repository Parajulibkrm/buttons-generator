import { Button } from "./Button";

export const ButtonContainer = (): JSX.Element => {
  return (
    <section className="w-full grid place-content-center content-center p-12">
        <Button styleButton="normal" />
    </section>
  );
};
