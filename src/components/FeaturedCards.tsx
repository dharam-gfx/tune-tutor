

import React from 'react'
import AnimatedBorderCard from './AnimatedBorderCard'
import MusicData from '../data/music_courses.json'
function FeaturedCards() {

    const featuredCourses = MusicData.courses.filter((course) => course.isFeatured);

    return (
        <div>
            <div className='container mx-auto border'>
                <div>
                    <h1 className='text-3xl md:text-6xl py-8 font-bold text-center'>Featured</h1>
                </div>
                <div className="grid mx-auto p-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        featuredCourses && featuredCourses.map(course => (
                            <div key={course.id} className=''>
                                <AnimatedBorderCard >
                                    <div className='col-span-1 flex flex-col'>
                                        <img className='w-full' src={course.image} alt={course.title} />
                                        <div className='p-4 flex flex-col'>
                                            <h1 className='text-2xl font-bold'>{course.title}</h1>
                                            <p className='opacity-50 flex-1'>{course.description}</p>
                                            <p className='text-blue-500 dark:text-blue-500 text-2xl font-bold'>Price:  ${course.price}</p>
                                            <p className='text-right'>{course.instructor}</p>
                                        </div>
                                    </div>

                                </AnimatedBorderCard>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default FeaturedCards