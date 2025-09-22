export default function Certificate(){
  return (
    <>
      <div className="mt-12 text-slate-300 text-center">
        <h3 className="text-2xl font-bold text-red-500">Certificates</h3>
        <h1 className="text-4xl font-bold mt-4">Verified Skills & Expertise</h1>
        <p className="text-base">A collection of certifications that showcase my knowlage in web, mobile development, and IT</p>
        <div className="mt-8 gap-5 grid grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bottom-0 hover:bottom-2 transition-all duration-700  text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
            <div className="">
              <div className="flex justify-between mb-2">
                <h1 className="text-lg font-bold">
                  Belajar Backend Javascript
                </h1>
                <div>
                  2024
                </div>
              </div>
              <div>
                <div className="flex gap-4">
                  icon
                  <p>Dicoding</p>
                </div>
                <div className="flex gap-4">
                  icon
                  <p>2022 - 2025</p>
                </div>
              </div>
              <div className="hover:bg-red-400 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-6 py-2 bg-red-500">
                <button>
                  Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
