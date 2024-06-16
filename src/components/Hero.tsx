"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Button from "./Button";
import { TypewriterEffect } from "./ui/typewriter-effect";
const Hero = () => {
    const words = [
        {
            text: "Master",
            className: 'text-3xl md:text-7xl'
        },
        {
            text: "The",
            className: 'text-3xl md:text-7xl'
        },
        {
            text: "Art",
            className: 'text-3xl md:text-7xl'
        },
        {
            text: "of",
            className: 'text-3xl md:text-7xl'
        },
        {
            text: "Music.",
            className: "text-blue-500 dark:text-blue-500 text-3xl md:text-7xl",
        },
    ];
    return (

        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className=" font-bold dark:text-white text-center">
                    <TypewriterEffect words={words} />
                </div>
                <p className='max-w-lg mx-auto dark:text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, provident unde sit ullam soluta veritatis repellendus natus officiis excepturi incidunt nesciunt  enim, impedit</p>

                <div className="mt-4">
                    <Button className={"dark:bg-black/55 bg-white text-black dark:text-white flex items-center space-x-2"}>
                        <span>Explore More</span>
                    </Button>
                </div>
            </motion.div>
        </AuroraBackground>
    )
}

export default Hero