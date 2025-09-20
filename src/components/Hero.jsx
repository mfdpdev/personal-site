import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Hero(){
  const text = "</Developer>"
  return (
    <>
      <div className="flex flex-wrap mt-6">
        <div className="sm:flex-1">
          <div className="space-y-4 text-slate-700 p-6 w-full bg-slate-300 rounded-3xl rounded-bl-none">
            <h3 className="text-2xl">Hello! World</h3>
            <h1 className="text-4xl font-bold">I'm Muhammad Firmandani Pramoedya</h1>
            <h2 className="text-2xl text-red-500">{text}</h2>
            <p className="text-md">
              I am passionate about software development, design, web development, mobile development, and exploring new technologies.
              If you're interested in collaborating or creating something cool together, let's connect and build something amazing!
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
        <div className="sm:flex-1">
        </div>
      </div>
    </>
  )
}
