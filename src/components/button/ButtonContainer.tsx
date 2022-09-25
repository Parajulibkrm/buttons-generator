export const ButtonContainer = (): JSX.Element => {
  return (
    <section className="w-full grid grid-cols-3 p-12">
        <button className="w-36 h-12 border-2 font-bold transition-all duration-300 hover:bg-black hover:text-white">
            Hello World!
        </button>
        <button className="w-36 h-12 outline-none font-bold bg-red-400 shadow-red-600 shadow-md text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-300 active:shadow-xl active:shadow-red-300">
            Hello World!
        </button>
        <button type="button" className="w-36 h-12 font-bold text-white bg-gradient-to-br from-purple-600 to-blue-500 transition-all duration-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            Hello World
        </button>
        <button className="w-36 h-12 border-2 border-black shadow-notion font-bold transition-all duration-300 hover:shadow-none">
            Hello World!
        </button>
        <button className="w-36 h-10 border-2 border-t-2 border-t-white border-l-white border-b-black border-r-black bg-gray-300 transition-all duration-300 active:border-transparent active:shadow-sm active:shadow-black">
            Hello World!
        </button>
        <button className="w-36 h-12 text-white bg-rose-600 uppercase tracking-wider shadow-notion shadow-sky-300 font-bold transition-all duration-300 hover:shadow-rose-600 hover:bg-sky-300 hover:text-rose-500 hover:shadow-none">
            Hello World!
        </button>
    </section>
  );
};
