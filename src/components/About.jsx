import { useInView } from "react-intersection-observer"

export default function About(){
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })

  return (
    <>
      <div className="mt-12 text-slate-300 flex gap-6 flex-wrap w-full">
        <div ref={aboutRef} className={`sm:flex-3 ${aboutInView ? "opacity-100" : "opacity-0"} transition-all duration-[1s]`}>
          <h1 className="text-xl mb-10 font-bold">About Me</h1>
          <div className="space-y-9">
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, justo eget fermentum gravida, nulla metus tincidunt purus, sed volutpat nisl lectus et metus. Integer sollicitudin dui ac nibh feugiat, at elementum leo tincidunt. Phasellus varius euismod massa, nec condimentum odio luctus vel. Sed fringilla justo sit amet augue facilisis, nec auctor eros condimentum.</p>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, justo eget fermentum gravida, nulla metus tincidunt purus, sed volutpat nisl lectus et metus. Integer sollicitudin dui ac nibh feugiat, at elementum leo tincidunt. Phasellus varius euismod massa, nec condimentum odio luctus vel. Sed fringilla justo sit amet augue facilisis, nec auctor eros condimentum.</p>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, justo eget fermentum gravida, nulla metus tincidunt purus, sed volutpat nisl lectus et metus. Integer sollicitudin dui ac nibh feugiat, at elementum leo tincidunt. Phasellus varius euismod massa, nec condimentum odio luctus vel. Sed fringilla justo sit amet augue facilisis, nec auctor eros condimentum.</p>
          </div>
        </div>
        <div className="lg:flex-1"></div>
        <div ref={skillsRef} className={`sm:flex-3 ${skillsInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-[1s]`}>
          <h1 className="text-xl mb-10 font-bold">Skills</h1>
          <div className="flex gap-5 flex-wrap">
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              HTML
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              CSS
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Javascript
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              PHP
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Python
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Database
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Git
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              React
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Laravel
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Typescript
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Docker
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              RESTful API
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              OOP
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Flutter
            </div>
            <div className="cursor-pointer px-3 py-1 bg-slate-700 text-slate-300 rounded font-bold">
              Linux
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
