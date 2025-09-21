import { useRef } from "react"

export default function Navbar(){
  const hamburgerElement = useRef()
  const navItem = useRef()

  const toggleHamburger = () => {
    const hamburger  = hamburgerElement.current
    const wrapper = navItem.current

    if(hamburger.classList.contains('hamburger-active')){
      hamburger.classList.remove("hamburger-active")
      wrapper.classList.remove("wrapper-active")
    }else{
      hamburger.classList.add("hamburger-active")
      wrapper.classList.add("wrapper-active")
    }
  }
  return (
    <>
      <nav className="fixed w-full flex justify-center">
        <div className="mx-auto absolute w-full max-w-7xl bg-slate-900 text-slate-300 flex justify-between px-12 py-6">
          <div>
            Logo
          </div>
          <div className="hidden sm:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-400" >
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400" >
                  Contact Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400" >
                  Curriculum Vitae
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400" >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            <button ref={hamburgerElement} onClick={toggleHamburger} type="button" className="hamburger flex flex-col gap-2">
              <span className="origin-top-left block w-[30px] h-[2px] bg-white transition duration-300"></span>
              <span className="block w-[30px] h-[2px] bg-white transition duration-300"></span>
              <span className="origin-bottom-left block w-[30px] h-[2px] bg-white transition duration-300"></span>
            </button>
          </div>

          <span className="border-b-1 border-slate-800 w-full absolute left-0 bottom-0"></span>
          <div ref={navItem} className="h-0 overflow-hidden absolute sm:hidden bg-slate-900 flex items-center w-full px-8 left-0 top-full transition-all duration-300">
            <ul className="flex flex-col space-y-6">
              <li>
                <a href="#" className="hover:text-red-500" > Homepage </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500" > Contact Me </a>
              </li>
            </ul>
          </div>
        </div>


      </nav>
    </>
  )
}
