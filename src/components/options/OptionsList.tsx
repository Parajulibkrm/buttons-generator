export const OptionsList = (): JSX.Element => { 
  
  const clickButton = (e:any):void => {
    console.log(e.target.id);
  }
  
  return (
  	<div className="my-8">
      <ul className="flex flex-col items-center space-y-5 list-none">
        <li className="items__list" id="normal" onClick={clickButton}>Normal Button</li>
        <li className="items__list" id="shadow">Button with Shadow</li>
        <li className="items__list" id="gradient">Button Gradient Duotone</li>
        <li className="items__list" id="notion">Button Notion Style</li>
        <li className="items__list" id="windows">Retro Window Version</li>
        <li className="items__list" id="cyberpunk">Button Cyberpunk</li>
      </ul>
    </div>
  )
}
