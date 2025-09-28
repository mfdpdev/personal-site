import { useInView } from "react-intersection-observer"
import defaultProject from "./../assets/images/default.png"

export default function Projects(){
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <>
      <div className="mt-72 text-slate-300 overflow-hidden">
        <div ref={titleRef} className={`w-2/3 mx-auto transform transition duration-[1s] ${titleInView ? "translate-y-0 opacity-100" : "-translate-y-1/2 opacity-0"}`}>
          <h3 className="text-2xl font-bold text-red-500 text-center">Projects Showcase</h3>
          <h1 className="text-4xl font-bold mt-4 text-center">Innovative Web & Application Development Solutions</h1>
        </div>
        <div ref={projectsRef}>
          <div className={`${projectsInView ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"} transform transition duration-[1s] mt-12 gap-8 grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            <a href="" className="relative bottom-0 hover:bottom-2 transition-all duration-700 overflow-hidden bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
              <div className="bg-slate-300 h-52 flex justify-center items-center">
                <img src={defaultProject} className="h-full" alt="" />
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
            <a href="" className="relative bottom-0 hover:bottom-2 transition-all duration-700 overflow-hidden bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
              <div className="bg-slate-300 h-52 flex justify-center items-center">
                <img src={defaultProject} className="h-full" alt="" />
              </div>
              <div className="p-4">
                <h1 className="text-xl font-bold">Flutter To-Do App</h1>
                <p className="text-md">Todo App Practice is a simple and clean to-do list application built with Flutter</p>
                <ul className="mt-4 text-sm list-disc ml-4">
                  <li>
                    Add new tasks quickly.
                  </li>
                  <li>
                    Edit existing tasks.
                  </li>
                  <li>
                    Mark tasks as completed.
                  </li>
                  <li>
                    Delete tasks.
                  </li>
                  <li>
                    Clean and minimal design.
                  </li>
                </ul>
              </div>
            </a>
            <a href="" className="relative bottom-0 hover:bottom-2 transition-all duration-700 overflow-hidden bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
              <div className="bg-slate-300 h-52 flex justify-center items-center">
                <img src={defaultProject} className="h-full" alt="" />
              </div>
              <div className="p-4">
                <h1 className="text-xl font-bold">Konter Management</h1>
                <p className="text-md">System for managing transactions on the Konter using laravel</p>
                <ul className="mt-4 text-sm list-disc ml-4">
                  <li>
                    CRUD Operations
                  </li>
                  <li>
                    Save traction report to pdf
                  </li>
                  <li>
                    Authentication support
                  </li>
                  <li>
                    Print proof of transactions via a thermal printer
                  </li>
                  <li>
                    Error handling
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
