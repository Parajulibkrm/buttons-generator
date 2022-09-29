import { useContext } from "react"
import { ButtonCtx } from "../../context/ButtonContext"

export const OptionsList = (): JSX.Element => { 

  const { changeStyle } = useContext(ButtonCtx);

  return (
  	<div className="my-8">
      <ul className="flex flex-col items-center space-y-5 list-none">
        <li className="items__list" id="normal" onClick={(e) => changeStyle(e)}>Normal Button</li>
        <li className="items__list" id="shadow" onClick={(e) => changeStyle(e)}>Button with Shadow</li>
        <li className="items__list" id="gradient" onClick={(e) => changeStyle(e)}>Button Gradient Duotone</li>
        <li className="items__list" id="notion" onClick={(e) => changeStyle(e)}>Button Notion Style</li>
        <li className="items__list" id="windows" onClick={(e) => changeStyle(e)}>Retro Window Version</li>
        <li className="items__list" id="cyberpunk" onClick={(e) => changeStyle(e)}>Button Cyberpunk</li>
      </ul>
    </div>
  )
}
