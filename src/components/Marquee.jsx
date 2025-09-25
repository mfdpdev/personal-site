export default function Marquee(){
  return (
    <>
      <div className="-rotate-2 -z-1 h-12 flex items-center bg-red-500 text-slate-100 font-bold mt-24 absolute w-full left-0 ">
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
    </>
  )
}
