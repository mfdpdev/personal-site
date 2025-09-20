export default function Footer(){
  return (
    <>
      <div className="w-full flex flex-col items-center bg-slate-900 text-slate-300 py-8">
        <h1 className="text-2xl font-bold text-center">Thanks for stopping by! </h1>
        <p className="font-light mt-2 text-center">Let's stay connected, reach out to me on my social media!</p>
        <div className="w-full flex justify-evenly my-12">
          <div className="hover:bg-red-500 h-12 w-12 bg-slate-600 flex justify-center items-center rounded-lg"> icon </div>
          <div className="hover:bg-red-500 h-12 w-12 bg-slate-600 flex justify-center items-center rounded-lg"> icon </div>
          <div className="hover:bg-red-500 h-12 w-12 bg-slate-600 flex justify-center items-center rounded-lg"> icon </div>
        </div>

        <p className="text-slate-600">2025 Designed & Development by Muhammad Firmandani Pramoedya</p>
      </div>
    </>
  )
}
