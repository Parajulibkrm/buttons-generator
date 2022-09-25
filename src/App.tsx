import './index.css'
import { Options } from './components/options/Options';
import { ButtonContainer } from './components/button/ButtonContainer';

export const App = ():JSX.Element => {
  return (
    <main className="h-screen w-full flex">
      <Options />
      <ButtonContainer />
    </main>
  )
}


