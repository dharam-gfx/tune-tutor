import React from 'react'
import MeteorsBackground from '@/components/MeteorsBackground'
import { Meteors } from '@/components/ui/meteors'
import { SignupForm } from '@/components/SignupForm'

const page = () => {
    return (
        <div className='mt-24 container mx-auto'>
            <MeteorsBackground>
                <div className="">
                    <div className=" w-full relative">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                        <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

                            <div className='mx-auto'>
                                <div className='text-center'>
                                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                                        Contact Us
                                    </h2>
                                </div>
                                <div>
                                    <SignupForm></SignupForm>
                                </div>
                            </div>

                            {/* Meaty part - Meteor effect */}
                            <Meteors number={50} />
                        </div>
                    </div>
                </div>
            </MeteorsBackground>
        </div>
    )
}

export default page