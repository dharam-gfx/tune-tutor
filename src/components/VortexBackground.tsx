import { Vortex } from "./ui/vortex";
const VortexBackground = ( { children, className }: {
  children: React.ReactNode,
  className:string
} ) => {
  return (
    <div>  <div className={className}>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        {children}
      </Vortex>
    </div></div>
  )
}

export default VortexBackground