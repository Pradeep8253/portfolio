import React, {useEffect} from 'react'
import {gsap, Power1} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProgressBar({count, label,id}) {
    const startCounting = () => {
        let number = document.getElementById(`${id}number`)
        let counting = 0
        setInterval(() => {
            if (counting === count) {
                clearInterval()
            }else{
                counting +=1
                number.innerHTML = counting + '%'
            }
        }, 1000/count);
    }
    const scrollAnim = () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${id}`,
                start: 'top 80%',
                end: 'bottom top',
            }
        })
        tl.fromTo(`#${id}`, {opacity:0,}, {opacity:1, duration:0.5, ease:Power1.ease, onComplete:startCounting})
        tl.fromTo(`#${id} circle`,{strokeDashoffset:472},{strokeDashoffset:472-(472*(count/100)), duration:1, ease: Power1.easeInOut})
    }
    useEffect(() => {
        setTimeout(() => {
            scrollAnim()
        }, 1000);
    }, [])
    return (
        <div className='flex-1 min-w-[40%] max-w-[45%] md:min-w-[30%] lg:min-w-[20%] flex items-center justify-center my-8'>
            <div className='skill' id={id}>
                <div className='outer'>
                    <div className='inner'>
                        <h3 className="font-semibold tracking-wide number text-h3 dark:text-white text-grayMedium" id={`${id}number`}>0</h3>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <circle cx="80" cy="80" r="73" strokeLinecap="round" />
                </svg>
                <h5 className='mt-4 dark:text-white text-grayMedium'>{label}</h5>
            </div>
        </div>
    )
}

export default ProgressBar
