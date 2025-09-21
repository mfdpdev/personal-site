export default function Projects(){
  return (
    <>
      <div className="mt-40 text-slate-300 text-center">
        <h3 className="text-2xl font-bold text-red-500">Low Code Showcase</h3>
        <h1 className="text-3xl font-bold mt-4">Low Code Website Development</h1>
        <p className="text-base">Simple designs can also be developed nicely even only with a CMS. Feel free to look at some of my works</p>
        <div className="mt-8 gap-5 grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative bottom-0 hover:bottom-2 transition-all duration-300 overflow-hidden bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
            <div className="bg-white h-32">
            </div>
            <div className="my-6 flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">Batavia Jokers</h1>
              <p>community website</p>
              <div className="hover:bg-red-400 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-6 py-4 bg-red-500 text-lg font-bold">
                <button>
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
