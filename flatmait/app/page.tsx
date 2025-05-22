import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { auth } from '@clerk/nextjs/server'
import { SignInButton, SignUpButton } from "@clerk/nextjs"
import Link from 'next/link'
import LandingPageSection from "@/components/ui/landingpage_section"
export default async function Home() {
  const { userId } = await auth()

  return (
    <div>
       <div className="w-screen min-h-screen bg-[#d5c8db] flex">
       
        <div className="flex flex-col object-left w-180 p-3 ml-10  ">
          <div className="flex flex-col  items-center ml-40 mt-70">
            <h1 className="mr-6 text-8xl font-semibold">
              <TypewriterEffectSmooth
                words={[
                  { text: "Find" },
                  { text: "Your" },
                
                  { text: "Perfect" },
                  { text: "Roommate", className: "text-purple-700" },
                ]}
                cursorClassName="bg-blue-500"
              />
            </h1>
            <p className="mt-3 mb-5 px-5 max-w-xl text-center text-2xl text-stone-700 dark:text-white">
            Connect with roommates who truly vibe with your lifestyle, habits, and budget.
          </p>
          {/* Show Sign In/Up if not logged in */}
          {!userId ? (
            <div className="mt-5 flex space-x-4">
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal"  >
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          ) : (
            
            <Link href="/dashboard">
               <Button className="mb-2 px-4 py-5 text-2xl bg-[#d5c8db] border-2 border-purple-600 text-purple-700
                transition-colors duration-200 hover:bg-purple-300"> Dashboard</Button>
              </Link>
          )}
          </div>
         
          
        </div>
        <div className="h-190 flex flex-col justify-center items-center w-full">
          <img src="/hotel.png" alt="friends" className="w-[730px] h-[750px] object-contain rounded-lg ml-20"/>
        </div>

      </div>
      <LandingPageSection/>

    
    </div>
    
   
  )
}
