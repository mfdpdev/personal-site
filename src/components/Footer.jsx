import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
  return (
    <>
      <div className="w-full flex flex-col items-center bg-slate-900 text-slate-300 py-8 mt-6">
        <h1 className="text-2xl font-bold text-center">Thanks for stopping by! </h1>
        <p className="font-light text-center">Let's stay connected, reach out to me on my social media!</p>
        <div className="w-full flex mt-6 mb-12 flex-wrap justify-center gap-4">
            <div className="flex justify-center items-center hover:animate-bounceUpDown hover:bg-red-500 rounded-lg h-10 w-10 bg-slate-500">
              <FontAwesomeIcon className='text-2xl' icon={faLinkedin} />
            </div>
            <div className="flex justify-center items-center hover:animate-bounceUpDown hover:bg-red-500 rounded-lg h-10 w-10 bg-slate-500">
              <FontAwesomeIcon className='text-2xl' icon={faGithub} />
            </div>
            <div className="flex justify-center items-center hover:animate-bounceUpDown hover:bg-red-500 rounded-lg h-10 w-10 bg-slate-500">
              <FontAwesomeIcon className='text-2xl' icon={faInstagram} />
            </div>
            <div className="flex justify-center items-center hover:animate-bounceUpDown hover:bg-red-500 rounded-lg h-10 w-10 bg-slate-500">
              <FontAwesomeIcon className='text-2xl' icon={faGoogle} />
            </div>
        </div>

        <p className="text-slate-600 text-center">2025 Designed & Development by Muhammad Firmandani Pramoedya</p>
      </div>
    </>
  )
}
