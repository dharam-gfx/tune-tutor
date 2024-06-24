import dynamic from 'next/dynamic';
import React from 'react'
const AnimatedBorderCard=  dynamic(() => import("./AnimatedBorderCard"));
import MusicData from '../data/music_courses.json'
import Image from 'next/image';
import Link from 'next/link';
function FeaturedCards() {

    const featuredCourses = MusicData.courses.filter( ( course ) => course.isFeatured );
    interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string

    }
    return (
        <div>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-3xl md:text-6xl py-8 font-bold text-center'>Featured</h1>
                </div>
                <div className="grid p-4 gap-6 md:gap-14 sm:grid-cols-2 md:grid-cols-3 ">
                    {
                        featuredCourses && featuredCourses.map( ( course: Course ) => (
                            <div key={course.id} className=''>
                                <AnimatedBorderCard className='rounded-[22px] overflow-hidden bg-white dark:bg-zinc-900'>
                                    <Image
                                        src={course.image}
                                        height={20}
                                        width="1000"
                                        className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={course.slug}
                                    />
                                    <div className='py-6 px-5 lex flex-col h-ful'>
                                        <h1 className='text-xl font-bold'>{course.title}</h1>
                                        <p className='opacity-50 flex-1 py-2 h-24'>{course.description}</p>
                                        <p className=' pb-6 text-xl font-bold'><span className='text-purple-500 dark:text-purple-500'>Price: </span> ${course.price}</p>
                                        <Link href={`/courses`}>
                                            <button className="py-2 block w-full bg-purple-700 transition-colors hover:bg-purple-900 rounded-md">View All Courses </button>
                                        </Link>
                                    </div>
                                </AnimatedBorderCard>
                            </div>
                        ) )
                    }

                </div>
            </div>
        </div>
    )
}

export default FeaturedCards

