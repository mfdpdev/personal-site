import { useInView } from "react-intersection-observer"

export default function Marquee(){
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  return (
    <>
      <div ref={ref} className={`-z-1 h-36 absolute mt-20 left-0 overflow-hidden ${inView ? "w-full" : "w-0"} transition-all duration-[1s]`}>
        <div className="-rotate-2 -z-1 h-12 flex items-center bg-red-500 text-slate-100 font-bold absolute w-full left-0 top-1/2 transform -translate-y-1/2">
          <div className="flex gap-4 overflow-hidden whitespace-nowrap">
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
            <span className="">This is a scrolling text marquee using Tailwind CSS!</span>
          </div>
        </div>
      </div>
    </>
  )
}
