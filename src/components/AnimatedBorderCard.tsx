'use client'
import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
const AnimatedBorderCard = ({ children,className }: {
    children: React.ReactNode,
    className:string
}) => {
    return (
        <div>
            <BackgroundGradient className={`${className} `}>
                {children}
            </BackgroundGradient>
        </div>
    )
}

export default AnimatedBorderCard