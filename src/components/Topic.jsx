import { useInView } from "react-intersection-observer"

export default function Topic(){

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  const { ref: topicRef, inView: topicInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })

  return (
    <>
      <div className="flex flex-wrap text-slate-300 mt-12 gap-y-6 justify-between max-w-3xl mx-auto overflow-hidden">
        <div ref={titleRef} className={`md:w-4/6`}>
          <div className={`grid gap-y-2 w-full transform transition duration-[1s] ${titleInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div>
              <p>Let's have conversation in :</p>
              <div className="flex flex-wrap gap-4 my-6">
                <div className="w-fit px-5 py-3 rounded-xl border border-slate-700">Bahasa Indonesia</div>
                <div className="w-fit px-5 py-3 rounded-xl border border-slate-700">Intermediate English</div>
              </div>
            </div>
            <h1 className="md:order-first text-3xl font-bold">Here's five topics that I can talk about, for 15 minutes with zero preparation:</h1>
          </div>
        </div>
        <div ref={topicRef} className={`transform transition duration-[1s] ${topicInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <ol>
            <li>1. Programming</li>
            <li>2. Web & Mobile Developer</li>
            <li>3. IT</li>
            <li>4. Design Grapich</li>
            <li className="line-through">5. vim is the best editor</li>
          </ol>
        </div>
      </div>
    </>
  )
}
