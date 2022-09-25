import './index.css'
import { Options } from './components/options/Options'

export const App = ():JSX.Element => {
  return (
    <div className="h-screen w-full flex">
      <Options />
    </div>
  )
}


