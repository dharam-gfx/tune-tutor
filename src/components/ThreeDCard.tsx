"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const ThreeDCard = ( { item }: {
    id: number,
    title: string,
    description: string,
    image: string,
    price?: number,
    slug: string,
    content: string
} ) => {

    return (
        <div>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {item.title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {item.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={item.image}
                            height={20}
                            width="1000"
                            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                        {
                            item.price ?
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    <span className=' pb-6 text-xl font-bold'><span className='text-purple-500 dark:text-purple-500'>Price: </span>${item.price}</span>
                                </CardItem>
                                : null
                        }
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={`${item.slug ?  item.slug : '#'}`}
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          {item.price ?  "Book Now" :"Read More "}
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    )
}

export default ThreeDCard