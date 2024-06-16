"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Button = ({className,children}: {
    className:string;
    children: React.ReactNode;
  }) => {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className={className}
      >
        {/* <AceternityLogo /> */}
        {children}
      </HoverBorderGradient>
    </div>
  )
}

export default Button