import { OptionsList } from './OptionsList';

export const Options = (): JSX.Element => {
	return (
		<nav className="w-2/4 h-full p-8 bg-white shadow-2xl shadow-black border-2 border-black overflow-auto">
			<h1 className="text-3xl font-bold font-display text-black border-b-2 border-b-sky-600 w-fit">
				Buttons Generator
			</h1>
			<h2 className="my-2 text-black font-bold w-fit">
				Click in the "Hello World" button to copy the styles
			</h2>

			<OptionsList />

			<div className="mt-4">
				<span className="font-bold text-black">
					Coded with ❤ by
					<a
						className="ml-2 text-black border-b-2 border-sky-500 transition-all duration-300 hover:border-transparent hover:text-black"
						href="https://github.com/laindomJS"
						target="_blank">
						lain_ts
					</a>
				</span>
			</div>
		</nav>
	)
}
