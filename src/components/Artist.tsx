"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "A.R. Rahman",
        description: "Oscar-winning composer fusing Indian classical music with electronic sounds. Known as 'The Mozart of Madras.'",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                The Mozart of Madras
            </div>
        ),
    },
    {
        title: "Lata Mangeshkar",
        description: "Legendary playback singer with a melodious voice and an extensive repertoire of Bollywood hits. Often called the 'Nightingale of India.'",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--green-500))] flex items-center justify-center text-white">
                Nightingale of India
            </div>
        ),
    },
    {
        title: "Kishore Kumar",
        description: "Versatile playback singer, actor, and soulful composer. Fondly known as 'Kishore Da.'",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--orange-500))] flex items-center justify-center text-white">
                Kishore Da
            </div>
        ),
    },
    {
        title: "Shreya Ghoshal",
        description: "Popular playback singer known for sweet vocals and chart-topping songs. Often referred to as the 'Melody Queen.'",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Melody Queen
            </div>
        ),
    },
    {
        title: "Ustad Zakir Hussain",
        description: "Renowned tabla player and composer in Indian classical music. Revered as the 'Tabla Wizard.'",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--emerald-500))] flex items-center justify-center text-white">
                Tabla Wizard
            </div>
        ),
    },
];


export default function Artist() {
    return (
        <div className="p-10">
            <h1 className='text-3xl md:text-6xl pb-10 font-bold text-center'>Artist</h1>

            <StickyScroll content={content} />
        </div>
    );
}
