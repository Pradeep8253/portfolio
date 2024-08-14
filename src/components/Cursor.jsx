import React, {useEffect} from 'react'

function Cursor() {
    useEffect(() => {
        const $bigBall = document.querySelector('.cursor__ball--big');
        const $smallBall = document.querySelector('.cursor__ball--small');
        const $hoverables = document.querySelectorAll('.hoverable');
        const cursor = document.querySelector('.cursor')

        document.body.addEventListener('mousemove', onMouseMove);

        $hoverables.forEach(hoverable => {
            hoverable.addEventListener('mouseenter',function () {
                if ($bigBall.classList.contains('scale-[1]')) {
                    $bigBall.classList.remove('scale-[1]')
                }
                    $bigBall.classList.add('scale-[2]')
                    $smallBall.classList.add('opacity-0')
                    $smallBall.classList.remove('opacity-100')
            })
            hoverable.addEventListener('mouseleave', function () {
                    $bigBall.classList.remove('scale-[2]')
                    $bigBall.classList.add('scale-[1]')
                    $smallBall.classList.remove('opacity-0')
                    $smallBall.classList.add('opacity-100')
            }) 
        });

        function onMouseMove(e) {
            if (e.clientX < 5 || e.clientX > (window.innerWidth-5) || e.clientY < 5 || e.clientY > (window.innerHeight -5)) {
                cursor.classList.remove('opacity-100')
                cursor.classList.add('opacity-0')
            }else{
                cursor.classList.add('opacity-100')
                $bigBall.setAttribute("style", "top: "+(e.clientY - 25)+"px; left: "+(e.clientX - 25)+"px;")
                $smallBall.setAttribute("style", "top: "+(e.clientY - 5)+"px; left: "+(e.clientX - 5)+"px;")
            }
        }
    })
    return (
        <div className="hidden opacity-0 cursor lg:block">
            <div className="transition-[transform] duration-150 cursor__ball cursor__ball--big">
                <svg height="50" width="50">
                <circle cx="25" cy="25" r="20" strokeWidth="0"></circle>
                </svg>
            </div>
            
            <div className="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
                </svg>
            </div>
        </div>
    )
}

export default Cursor
