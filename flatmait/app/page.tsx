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
      <div className="w-screen min-h-screen bg-[#d5c8db] flex justify-center items-center">
        <div className="flex flex-col items-center text-center max-w-4xl px-4">
          {/* Fixed width container for typewriter to prevent shifting */}
          <div className="w-full min-h-[120px] flex justify-center items-center mb-6">
            <h1 className="text-8xl font-semibold">
              <TypewriterEffectSmooth
                words={[
                  { text: "Find" },
                  { text: "Your" },
                  { text: "Perfect" },
                  { text: "Roommate", className: " text-purple-500" },
                ]}
                cursorClassName="bg-blue-500"
              />
            </h1>
          </div>
          
          {/* Fixed position paragraph */}
          <p className="mb-8 px-5 max-w-xl text-center text-2xl text-stone-700 dark:text-white">
            Connect with roommates who truly vibe with your lifestyle, habits, and budget.
          </p>
          
          {/* Show Sign In/Up if not logged in */}
          {!userId ? (
            <div className="flex space-x-4">
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          ) : (
            <Link href="/dashboard">
              <Button className="px-4 py-5 text-2xl bg-[#d5c8db] border-2 border-purple-600 text-purple-500 transition-colors duration-200 hover:bg-purple-300">
                Dashboard
              </Button>
            </Link>
          )}
          <div>
            <img src="bg.png" alt="" className="absolute bottom-0 left-0 w-150"/>
            <div className="w-150 border-1 border-b-current absolute bottom-0 left-0"></div>
          </div>
        </div>
      </div>
      <LandingPageSection/>
    </div>
  )
}