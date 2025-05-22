import { Button } from "@/components/ui/button";
import {Menu ,  X} from "lucide-react"
import { UserButton } from "@clerk/nextjs";
function Navbar() {
  return (
    <>
    <div className="fixed z-40 ">
      <div className="shadow-md flex justify-around gap-24 items-center w-screen py-3">
        <figure className="h-16 z-20 w-auto ">
          <img src="/logo.png" alt="" className="h-full w-full object-cover" />
        </figure>
        <nav className="hidden lg:flex lg:gap-3 text-lg z-20 justify-center text-gray-600">

        </nav>
        <UserButton/>
        
      </div>
     </div>
    
    </>
  )
}
export default Navbar