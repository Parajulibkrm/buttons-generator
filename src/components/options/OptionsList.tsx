export const OptionsList = (): JSX.Element => { 
	return (
  	<div className="my-8">
      <ul className="flex flex-col items-center space-y-5 list-none">
        <li className="items__list" id="normal">Normal Button</li>
        <li className="items__list" id="three-d">Button with Shadow</li>
        <li className="items__list" id="shadow">Button Gradient Duotone</li>
        <li className="items__list" id="bg">Button Notion Style</li>
        <li className="items__list" id="retro">Retro Window Version</li>
        <li className="items__list" id="retro-nes">Button Cyberpunk</li>
      </ul>
    </div>
  );
};
