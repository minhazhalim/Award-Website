import {useEffect,useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import clsx from 'clsx';
gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({title,containerClass}) => {
     const containerReference = useRef(null);
     useEffect(() => {
          const zim = gsap.context(() => {
               const titleAnimation = gsap.timeline({
                    scrollTrigger: {
                         trigger: containerReference.current,
                         start: '100 bottom',
                         end: 'center bottom',
                         toggleActions: 'play none none reverse',
                    },
               });
               titleAnimation.to('.animated-word',{
                    opacity: 1,
                    transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                    ease: 'power2.inOut',
                    stagger: 0.02,
               },0);
          },containerReference);
          return () => zim.revert();
     },[]);
     return (
          <div className={clsx('animated-title',containerClass)} ref={containerReference}>
               {title.split('<br/>').map((line,index) => (
                    <div className='flex-center flex-wrap max-w-full gap-2 px-10 md:gap-3' key={index}>
                         {line.split(" ").map((word,index) => (
                              <span className='animated-word' key={index} dangerouslySetInnerHTML={{__html: word}}/>
                         ))}
                    </div>
               ))}
          </div>
     );
};
export default AnimatedTitle;