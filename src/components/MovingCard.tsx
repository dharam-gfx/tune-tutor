import React from 'react'
import dynamic from 'next/dynamic';
const GridBackground = dynamic( () => import( "./GridBackground" ) );
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const MovingCard = () => {

    const testimonials = [
        {
            quote:
                "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
            name: "Kailash Kher",
            title: "Sanskruti",
        },
        {
            quote:
                "The best music is the kind that makes you feel alive. The kind that makes you want to move your body, makes you want to dance.",
            name: "S. Janaki",
            title: "Agni Natchathre",
        },
        {
            quote: "Music is the food of love.",
            name: "S. P. Balasubramaniam",
            title: "Thulasi",
        },
        {
            quote:
                "Music is like a butterfly, it has eight legs when it is born and it has wings when it dies.",
            name: "Satyajit Ray",
            title: "Pather Panchali",
        },
    ];
    return (
        <div>

            <GridBackground>

                <div className="h-[28rem] rounded-md flex flex-col antialiased bg-white dark:bg-black/40 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

                    <div>
                        <h1 className='text-3xl md:text-6xl pt-8 pb-3 font-bold text-center'>Inspiring Quotes</h1>
                        <h2 className="text-xl md:text-2xl font-bold text-center pt-3 pb-6">
                        A collection of inspiring quotes related to <span className="text-purple-500">music.</span>
                        </h2>
                    </div>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </GridBackground>
        </div>
    )
}

export default MovingCard