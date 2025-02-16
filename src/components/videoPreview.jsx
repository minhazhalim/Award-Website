import {gsap} from 'gsap';
import {useState,useEffect,useRef} from 'react';
export const VideoPreview = ({children}) => {
     const [isHovering,setIsHovering] = useState(false);
     const sectionReference = useRef(null);
     const contentReference = useRef(null);
     const handleMouseMove = ({clientX,clientY,currentTarget}) => {
          const rect = currentTarget.getBoundingClientRect();
          const xOffset = clientX - (rect.left + rect.width / 2);
          const yOffset = clientY - (rect.top + rect.height / 2);
          if(isHovering){
               gsap.to(sectionReference.current,{
                    x: xOffset,
                    y: yOffset,
                    rotationY: xOffset / 2,
                    rotationX: -yOffset / 2,
                    transformPerspective: 500,
                    duration: 1,
                    ease: 'power1.out',
               });
               gsap.to(contentReference.current,{
                    x: -xOffset,
                    y: -yOffset,
                    duration: 1,
                    ease: 'power1.out',
               });
          }
     };
     useEffect(() => {
          if(!isHovering){
               gsap.to(sectionReference.current,{
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    rotationX: 0,
                    duration: 1,
                    ease: 'power1.out',
               });
               gsap.to(contentReference.current,{
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: 'power1.out',
               });
          }
     },[isHovering]);
     return (
          <section
               style={{perspective: '500px'}}
               className='absolute z-50 size-full overflow-hidden rounded-lg'
               ref={sectionReference}
               onMouseMove={handleMouseMove}
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}
          >
               <div style={{transformStyle: 'preserve-3d'}} className='origin-center rounded-lg' ref={contentReference}>{children}</div>
          </section> 
     );
};
export default VideoPreview;