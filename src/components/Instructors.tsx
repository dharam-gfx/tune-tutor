import React from 'react'
import VortexBackground from './VortexBackground'
import AnimatedTooltip from './AnimatedTooltip'

const Instructors = () => {
  const instructors = [
    {
        id: 1,
        name: "Arijit Singh",
        designation: "Music Director",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Sunidhi Chauhan",
        designation: "Pop Singer",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Hariharan",
        designation: "Playback Singer",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Sonu Nigam",
        designation: "Pop Singer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Sunidhi Chauhan",
        designation: "Playback Singer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Shreya Ghoshal",
        designation: "Playback Singer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];
  return (
    <div>
      <VortexBackground className='w-full mx-auto rounded-md  h-[25rem] overflow-hidden'>
        <div>
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Meet Our Music Professionals
          </h2>
          <p className="text-white text-xl max-w-xl mx-auto my-6 text-center">
            Discover the talents of our expert music instructors and unleash your
            musical creativity.
          </p>
          <AnimatedTooltip people={instructors}></AnimatedTooltip>
        </div>
      </VortexBackground>
    </div>
  )
}

export default Instructors