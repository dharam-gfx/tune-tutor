'use client'
import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
const AnimatedBorderCard = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] overflow-hidden bg-white dark:bg-zinc-900">
                {children}
            </BackgroundGradient>
        </div>
    )
}

export default AnimatedBorderCard