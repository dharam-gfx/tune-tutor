"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import allWebinars from "@/data/webinars.json"
const Page = ( { params }: { params: { slug: string } } ) => {
  const webinar = allWebinars.webinars.filter( ( webinar ) => webinar.slug === params.slug );
  console.log( webinar );

  return (
    <div className="mt-32 container mx-auto">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {webinar.map( ( item, index ) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-purple-900/35 text-white rounded-full px-4 text-sm w-fit py-1 mb-4">
                {item.slug}
              </h2>

              <p className={twMerge( "text-3xl font-bold text-purple-500 mb-4" )}>
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
               <p className="text-[16px]"> <span className="text-lg font-bold text-green-500">Description: </span> <br/> {item.description}</p>
               <p className="text-[16px] mt-5"> {item.content}</p>
              </div>
            </div>
          ) )}
        </div>
      </TracingBeam>
    </div>
  )
}

export default Page