export default function Projects(){
              // <div className="hover:bg-red-400 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-6 py-4 bg-red-500 text-lg font-bold">
              //   <button>
              //     Visit Website
              //   </button>
              // </div>
        // <div className="mt-12 gap-5 grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  return (
    <>
      <div className="mt-60 text-slate-300">
        <div className="w-2/3 mx-auto">
          <h3 className="text-2xl font-bold text-red-500 text-center">Projects Showcase</h3>
          <h1 className="text-4xl font-bold mt-4 text-center">Innovative Web & Application Development Solutions</h1>
        </div>
        <div className="mt-12 gap-8 grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <a href="" className="relative bottom-0 hover:bottom-2 transition-all duration-700 overflow-hidden bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
            <div className="bg-slate-300 h-52">
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold">BE - Contact Management</h1>
              <p className="text-md">Project RESTful API using Typescript</p>
              <ul className="mt-4 text-sm list-disc ml-4">
                <li>
                  CRUD Operations
                </li>
                <li>
                  Validation with Zod
                </li>
                <li>
                  Authentication support
                </li>
                <li>
                  Environtment-based configuration
                </li>
                <li>
                  Error handling
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
