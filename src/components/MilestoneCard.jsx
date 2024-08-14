import React from 'react'

function MilestoneCard({count, label}) {
    return (
        <div className='min-w-[40%] flex-1 border-[1px] dark:border-gray border-grayLight p-8'>
            <h1 className='relative font-bold text-h1 text-green dark:text-orange milestone-count'>{count}<sup>+</sup></h1>
            <h5 className='mt-1 font-semibold uppercase md:ml-16 lg:ml-10 dark:text-white text-grayMedium'>{label}</h5>
        </div>
    )
}

export default MilestoneCard
