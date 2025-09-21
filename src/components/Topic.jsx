export default function Topic(){
  return (
    <>
      <div className="flex flex-wrap text-slate-300 mt-12 gap-y-6 justify-between max-w-3xl mx-auto">
        <div className="grid gap-y-2 md:w-4/6">
          <div className="">
            <p>Let's have conversation in :</p>
            <div className="flex flex-wrap gap-4 my-6">
              <div className="w-fit px-5 py-3 rounded-xl border border-slate-700">Bahasa Indonesia</div>
              <div className="w-fit px-5 py-3 rounded-xl border border-slate-700">Intermediate English</div>
            </div>
          </div>
          <h1 className="md:order-first text-3xl font-bold">Here's five topics that I can talk about, for 15 minutes with zero preparation:</h1>
        </div>
        <div className="">
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
