"use client";
import React from "react";
import { Button } from "./ui/moving-border";
const MovingBorder = ({className,borderClassName, children}:{
    className:string,
    borderClassName:string,
    children:React.ReactNode
}) => {
    return (
        <div>
            <Button
        containerClassName ='bg-transparent relative text-xl  h-11 w-40 p-[1px] overflow-hidden'
                borderRadius="1.75rem"
                borderClassName={`${borderClassName} `}
                className={`${className}  dark:border-slate-800 relative
                border backdrop-blur-xl text-white flex items-center
                justify-center w-full h-full text-sm antialiased`}
            >
                {children}
            </Button>
        </div>
    )
}

export default MovingBorder