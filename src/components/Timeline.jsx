import { useInView } from "react-intersection-observer";
import calender from "./../assets/images/calendar.png"

export default function Timeline(){
  const events = [
    { date: "2010", title: "Masuk Sekolah", description: "Pendidikan dasar dimulai." },
    { date: "2015", title: "Lulus SMP", description: "Lulus ujian dan melanjutkan ke SMA." },
    { date: "2020", title: "Lulus Kuliah", description: "Lulus dari universitas." },
    { date: "2025", title: "Mencari Pekerjaan", description: "Mencari pekerjaan pertama." },
    { date: "2030", title: "Karier Maju", description: "Menjadi Senior Developer." },
  ];
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  return (
    <>
      <div className="mt-12 flex justify-start flex-wrap gap-6 text-slate-300">
        <div ref={textRef} className={`sm:flex-3 ${textInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} transition-all duration-[1s]`}>
          <h1 className="font-bold text-3xl">Developer with a Vim Addiction</h1>
          <p className="mt-2">I'm a developer who enjoys working with both on the frontend and on the backend. I love learning new things and building stuff that actually works (on most browsers). And yes — I use Vim. Not because it's easy, but because exiting it is the real coding challenge.</p>
          <div className="flex justify-center items-center">
            <img className="w-2/3 lg:w-3/6" src={calender} alt="" />
          </div>
        </div>
        <div className="hidden lg:block lg:flex-1">
        </div>
        <div ref={timelineRef} className={`transform sm:flex-3 ${timelineInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} transition duration-[1s]`}>
          <div className="relative -z-1">
            <div className="left-[7px] absolute border-l-1 border-r-1 border-slate-100 h-full">
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Freelance Fullstack Web Developer</div>
                  <div className="mt-2 text-gray-600"></div>
                  <div className="text-sm text-gray-400 mt-1">2025</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Magang di CV Indo Digital Niaga Kediri</div>
                  <div className="mt-2 text-gray-600">Magang sebagai backend developer</div>
                  <div className="text-sm text-gray-400 mt-1">2024</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Menjadi Operator Print & Copy</div>
                  <div className="mt-2 text-gray-600"></div>
                  <div className="text-sm text-gray-400 mt-1">2023</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Mengikuti Program Pelatihan Desainer Grafis Muda</div>
                  <div className="mt-2 text-gray-600"></div>
                  <div className="text-sm text-gray-400 mt-1">2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
