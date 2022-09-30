import { OptionsList } from "./OptionsList"

export const Options = ():JSX.Element => {
    return (
        <nav className="w-2/4 p-8 bg-blue-400 shadow-2xl shadow-black">
            <h1 className="text-3xl font-bold font-display text-white">Buttons Generator</h1>
            <h2 className='my-2 text-white font-bold w-fit'>Click in the "Hello World" button to copy the styles</h2>
            <OptionsList />

            <div className="mt-4">
                <span className="font-bold">
                    Coded with ❤ by 
                    <a className="ml-2 text-white border-b-2 transition-all duration-300 hover:border-transparent hover:text-black" href="https://github.com/laindomJS" target="_blank">
                        lain_ts
                    </a>
                </span>
            </div>
        </nav>
    )       
}