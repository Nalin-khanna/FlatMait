import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#d5c8db] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/logo1.png" 
              alt="logo"  
              height={40} 
              width={120} 
              className="object-contain" 
            />
          </div>
          
          {/* Navigation Links - Hidden on mobile, visible on large screens */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium">
              Find Roommates
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium">
              Post Listing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium">
              About
            </a>
          </nav>
          
          {/* User Button */}
          <div className="flex-shrink-0">
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8"
                }
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - You can expand this later */}
      <div className="lg:hidden">
        {/* Mobile menu button and dropdown can be added here */}
      </div>
    </div>
  );
}

export default Navbar;