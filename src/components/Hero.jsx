import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import computer from "./../assets/images/computer.png"
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrambleTextPlugin)
export default function Hero(){
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })

  const { ref: socialRef, inView: socialInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })

  const developerText = "</Developer>";
  const developerRef = useRef(null);

  useEffect(() => {
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/';

    developerRef.current.textContent = '';

    gsap
      .timeline()
      .to(developerRef.current, {
        duration: 2,
        scrambleText: {
          text: developerText,
          chars: scrambleChars,
          speed: 0.5,
          delimiter: '',
          tweenLength: false,
        },
        ease: 'none',
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-6 gap-8">
        <div className="sm:flex-1">
          <div ref={heroRef} className={`${heroInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} transition-all duration-[1s] space-y-2 text-slate-700 p-6 w-full bg-slate-300 hero-shape`}>
            <h3 className="text-2xl">Hello! World</h3>
            <h1 className="font-extrabold text-3xl" >I'm Muhammad Firmandani Pramoedya</h1>
            <h2 className="text-4xl font-bold" ref={developerRef}>{developerText}</h2>
            <p className="mt-6 text-md w-10/12">
              I'm passionate about software and web development, design, mobile apps, and exploring new technologies. Let's connect and create something amazing together!
            </p>
          </div>
          <div ref={socialRef} className={`${socialInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} transition-all duration-[1.2s] text-slate-300 mt-6 w-full`}>
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
        <div className="sm:flex-1 lg:flex-2 w-full">
          <div className='w-full flex justify-center items-center'>
            <img src={computer} alt='' className='lg:w-2/3' />
          </div>
        </div>
      </div>
    </>
  )
}
