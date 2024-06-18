"use client";
import React from "react";
import { AnimatedTooltipUI } from "./ui/animated-tooltip";
const AnimatedTooltip = ( { people }: {
    people: {
        id: number;
        name: string;
        designation: string;
        image: string;
    }[];
} ) => {

    return (
        <div> <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltipUI items={people} />
        </div></div>
    )
}

export default AnimatedTooltip