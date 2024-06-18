"use client"

import ThreeDCard from "@/components/ThreeDCard"
import allWebinars from "@/data/webinars.json"
const Page = () => {
    const webinars = allWebinars.webinars.map( webinar => {
        return {
            id: webinar.id,
            title: webinar.title,
            description: webinar.description,
            image: webinar.image,
            content: webinar.content,
            slug: "/webinars/"+webinar.slug,
        }
    } );

    interface Webinar {
        id: number,
        title: string,
        description: string,
        image: string,
        slug:string,
        content:string
    }
    return (
        <div>
            <div className="mt-36">
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    All Webinars({webinars.length})
                </h2>
                <p className="text-white text-xl max-w-xl mx-auto my-6 text-center">
                    Discover the talents of our expert music instructors and unleash your
                    musical creativity.
                </p>
            </div>
            <div className="grid p-4 gap-6 md:gap-14 sm:grid-cols-2 md:grid-cols-3 ">
            {
                webinars && webinars.map((webinar:Webinar) =>(
                    <div key={webinar.id}>
                        <ThreeDCard item={webinar}></ThreeDCard>
                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Page