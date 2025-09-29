import { useInView } from "react-intersection-observer"
import { projects as tempProjects } from "../data/data"

export default function Projects(){
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const projects = tempProjects.slice(0, 3)
  return (
    <>
      <div className="mt-72 text-slate-300 overflow-hidden"> <div ref={titleRef} className={`w-2/3 mx-auto transform transition duration-[1s] ${titleInView ? "translate-y-0 opacity-100" : "-translate-y-1/2 opacity-0"}`}> <h3 className="text-2xl font-bold text-red-500 text-center">Projects Showcase</h3> <h1 className="text-4xl font-bold mt-4 text-center">Innovative Web & Application Development Solutions</h1>
        </div>
        <div ref={projectsRef}>
          <div className={`${projectsInView ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"} transform transition duration-[1s] mt-12 gap-8 grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {projects.map( (project, i) => (
              <a key={i} href={project.github} target="_blank" className="relative bottom-0 hover:bottom-2 transition-all duration-700 overflow-hidden bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
                <div className="bg-slate-300 h-52 flex justify-center items-center">
                  <img src={project.image} className="h-full" alt="" />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold">{project.title}</h1>
                  <p className="text-md">{project.description}</p>
                  <ul className="mt-4 text-sm list-disc ml-4">
                    {project.features?.map(feature => (
                      <li key={i}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
