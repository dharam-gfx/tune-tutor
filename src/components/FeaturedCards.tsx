import React from 'react'
import AnimatedBorderCard from './AnimatedBorderCard'

function FeaturedCards() {
    return (
        <div>
            <div className='max-w-7xl mx-auto border'>
                <div>
                    <h1 className='text-3xl md:text-6xl py-8 font-bold text-center'>Featured</h1>
                </div>
                <div className="grid p-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className=''>
                        <AnimatedBorderCard></AnimatedBorderCard>
                    </div>
                    <div className=''>
                        <AnimatedBorderCard></AnimatedBorderCard>
                    </div>
                    <div className=''>
                        <AnimatedBorderCard></AnimatedBorderCard>
                    </div>
                    <div className=''>
                        <AnimatedBorderCard></AnimatedBorderCard>
                    </div>
                    <div className=''>
                        <AnimatedBorderCard></AnimatedBorderCard>
                    </div>
                    <div className=''>
                        <AnimatedBorderCard></AnimatedBorderCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCards