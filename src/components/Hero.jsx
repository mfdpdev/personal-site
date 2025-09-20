import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Hero(){
  const text = "</Developer>"
  return (
    <>
      <div className="flex flex-wrap mt-6">
        <div className="sm:flex-1">
          <div className="space-y-2 text-slate-700 p-6 w-full bg-slate-300 hero-shape">
            <h3 className="text-2xl">Hello! World</h3>
            <h1 className="text-4xl font-bold">I'm Muhammad Firmandani Pramoedya</h1>
            <h2 className="text-4xl text-red-500 font-bold">{text}</h2>
            <p className="mt-6 text-md w-4/5">
              I'm passionate about software and web development, design, mobile apps, and exploring new technologies. Let's connect and create something amazing together!
            </p>
          </div>
          <div className="text-slate-300 mt-6 w-full">
            <p>Find Me On Social Media</p>
            <div className="w-full mt-4 flex gap-4 flex-wrap">
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
          </div>
        </div>
        <div className="sm:flex-1 lg:flex-2">
        </div>
      </div>
    </>
  )
}
