"use client"

import ThreeDCardCourse from "@/components/ThreeDCardCourse"
import allCourses from "@/data/music_courses.json"
const Page = () => {
    const courses = allCourses.courses.map( course => {
        return {
            id: course.id,
            title: course.title,
            description: course.description,
            image: course.image,
            price: course.price,
            slug: "/courses/" + course.slug
        }
    } );

    interface Course {
        id: number;
        title: string;
        description: string;
        image: string;
        price?: number | undefined;
        slug: string;
    }
    return (
        <div>
            <div className="mt-36">
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    All Courses({courses.length})
                </h2>
                <p className="text-white text-xl max-w-xl mx-auto my-6 text-center">
                    Discover the talents of our expert music instructors and unleash your
                    musical creativity.
                </p>
            </div>
            <div className="grid p-4 gap-6 md:gap-14 sm:grid-cols-2 md:grid-cols-3 ">
                {
                    courses && courses.map( ( course: Course ) => (
                        <div key={course.id}>
                            <ThreeDCardCourse
                                {...course}
                            >
                            </ThreeDCardCourse>
                        </div>
                    ) )
                }
            </div>

        </div>
    )
}

export default Page