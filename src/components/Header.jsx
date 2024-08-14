import React from 'react'

function Header({header,colorText, label}) {
    return (
        <header className='h-[30vh] lg:h-[40vh] relative flex items-center justify-center z-0'>
            <span className='inline-block font-extrabold dark:text-gray text-grayLight heading-bg'>{label}</span>
            <h1 className='mt-2 font-extrabold text-grayMedium dark:text-white heading-large'>{header} <span className='text-green dark:text-orange'>{colorText}</span></h1>
        </header>
    )
}

export default Header
