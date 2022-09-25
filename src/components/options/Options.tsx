import { OptionsList } from "./OptionsList"

export const Options = ():JSX.Element => {
    return (
        <nav className="w-2/5 p-8 bg-slate-400">
            <h1 className="text-3xl tracking-wider font-bold font-display text-white">Buttons Generator</h1>
            
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