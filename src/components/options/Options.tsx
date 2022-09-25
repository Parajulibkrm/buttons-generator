export const Options = ():JSX.Element => {
    return (
        <nav className="w-1/3 p-8 bg-slate-400">

            <h1 className="text-3xl tracking-wider font-bold font-display text-white">Buttons Generator</h1>
            
            <div className="my-8">
                <ul className="flex flex-col items-center space-y-5 list-none">
                    <li className="items__list">HELLO WORLD</li>
                    <li className="items__list">HELLO WORLD</li>
                    <li className="items__list">HELLO WORLD</li>
                    <li className="items__list">HELLO WORLD</li>
                    <li className="items__list">HELLO WORLD</li>
                    <li className="items__list">HELLO WORLD</li>
                </ul>
            </div>

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