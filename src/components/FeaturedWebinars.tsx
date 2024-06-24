import { HoverEffect } from "./ui/card-hover-effect";
import webinarsData from '../data/webinars.json'
import dynamic from "next/dynamic";
const MovingBorder= dynamic(() => import("./MovingBorder"))
import Link from "next/link";
const FeaturedWebinars = () => {
    const featuredWebinars = webinarsData.webinars
        .filter( ( webinar ) => webinar.isFeatured )
        .map( ( webinar ) => (
            {
                title: webinar.title,
                description: webinar.description,
                slug: `/webinars/${webinar.slug}`,
            }
        ) );

    return (
        <div className="container mx-auto">
            <div>
                <h1 className='text-3xl md:text-6xl pt-8 pb-3 font-bold text-center'>Featured Webinars</h1>
                <h2 className="text-xl md:text-2xl font-bold text-center">
                    Explore our latest <span className="text-purple-500">webinars</span>
                </h2>
            </div>
            <HoverEffect items={featuredWebinars} />
            <div className="text-center pb-10">

                <Link href='/webinars'>
                    <MovingBorder
                        borderClassName='h-10 w-20 opacity-[0.8] bg-[radial-gradient(var(--purple-500)_50%,transparent_30%)]'
                        className="bg-white h-10 dark:bg-zinc-900 text-black dark:text-white
                border-neutral-200">
                        Explore
                    </MovingBorder>
                </Link>
            </div>
        </div>
    )
}


export default FeaturedWebinars