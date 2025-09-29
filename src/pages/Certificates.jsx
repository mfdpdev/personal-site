import { faAward } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer"
import img1 from "./../assets/images/1.png"
import { Link, useParams } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Certificates(){
  let { id } = useParams()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  const { ref: certificatesRef, inView: certificatesInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  return (
    <>
      {
        id ? 
          <div ref={ref} className="w-full flex justify-center items-center mt-6">
            <img src={img1} className={`transition duration-[1s] ${inView ? "opacity-100" : "opacity-0"} `} />
          </div>
        :
        <div className="mt-12 text-slate-300 text-center overflow-hidden">
          <div ref={titleRef} className={`transform transition duration-[1s] ${titleInView ? "translate-y-0 opacity-100" : "-translate-y-1/2 opacity-0"}`}>
            <h1 className="text-4xl font-bold mt-4">It's My Certificates</h1>
          </div>

          <div ref={certificatesRef}>
            <div className={`mt-8 gap-5 grid grid grid-cols-1 lg:grid-cols-2 transform transition duration-[1s] ${certificatesInView ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"}`}>

              <Link to={`/certificates/${123}`}  className="relative bottom-0 hover:bottom-2 transition-all duration-700  text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
                <div className="">
                  <div className="flex flex-wrap gap-y-2 justify-between mb-2 items-center">
                    <h1 className="text-lg font-bold">
                      Peserta Pelatihan Desainer Grafis Muda
                    </h1>
                    <div className="rounded-md w-fit px-2 py-1 bg-slate-700">
                      2022
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      <FontAwesomeIcon icon={faAward} />
                      <p>-</p>
                    </div>
                    <div className="mt-2 ">
                      <p>Create something.</p>
                    </div>
                  </div>
                  <div className="hover:bg-red-500 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-4 py-2 bg-slate-700">
                    <button className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faAward} />
                      Certificate
                    </button>
                  </div>
                </div>
              </Link>

              <div className="relative bottom-0 hover:bottom-2 transition-all duration-700  text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
                <div className="">
                  <div className="flex flex-wrap gap-y-2 justify-between mb-2 items-center">
                    <h1 className="text-lg font-bold">
                      Test of English as A Foreign Language (507)
                    </h1>
                    <div className="rounded-md w-fit px-2 py-1 bg-slate-700">
                      2024
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      <FontAwesomeIcon icon={faAward} />
                      <p>-</p>
                    </div>
                    <div className="mt-2 ">
                      <p>Create something.</p>
                    </div>
                  </div>
                  <div className="hover:bg-red-500 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-4 py-2 bg-slate-700">
                    <button className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faAward} />
                      Certificate
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative bottom-0 hover:bottom-2 transition-all duration-700  text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
                <div className="">
                  <div className="flex flex-wrap gap-y-2 justify-between mb-2 items-center">
                    <h1 className="text-lg font-bold">
                      Belajar Dasar Pemrograman Javascript
                    </h1>
                    <div className="rounded-md w-fit px-2 py-1 bg-slate-700">
                      2024
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      <FontAwesomeIcon icon={faAward} />
                      <p>Dicoding</p>
                    </div>
                    <div className="mt-2 ">
                      <p>Create something.</p>
                    </div>
                  </div>
                  <div className="hover:bg-red-500 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-4 py-2 bg-slate-700">
                    <button className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faAward} />
                      Certificate
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative bottom-0 hover:bottom-2 transition-all duration-700  text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
                <div className="">
                  <div className="flex flex-wrap gap-y-2 justify-between mb-2 items-center">
                    <h1 className="text-lg font-bold">
                      Memulai Pemrograman Dengan Python
                    </h1>
                    <div className="rounded-md w-fit px-2 py-1 bg-slate-700">
                      2024
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      <FontAwesomeIcon icon={faAward} />
                      <p>Dicoding</p>
                    </div>
                    <div className="mt-2 ">
                      <p>Create something.</p>
                    </div>
                  </div>
                  <div className="hover:bg-red-500 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-4 py-2 bg-slate-700">
                    <button className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faAward} />
                      Certificate
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative bottom-0 hover:bottom-2 transition-all duration-700  text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
                <div className="">
                  <div className="flex flex-wrap gap-y-2 justify-between mb-2 items-center">
                    <h1 className="text-lg font-bold">
                      Belajar Dasar Structured Query Language (SQL)
                    </h1>
                    <div className="rounded-md w-fit px-2 py-1 bg-slate-700">
                      2024
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      <FontAwesomeIcon icon={faAward} />
                      <p>Dicoding</p>
                    </div>
                    <div className="mt-2 ">
                      <p>Create something.</p>
                    </div>
                  </div>
                  <div className="hover:bg-red-500 hover:animate-bounceUpDown rounded-lg mt-6 w-fit px-4 py-2 bg-slate-700">
                    <button className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faAward} />
                      Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
