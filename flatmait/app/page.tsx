import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { auth } from '@clerk/nextjs/server'
import { SignInButton, SignUpButton } from "@clerk/nextjs"
import Link from 'next/link'
export default async function Home() {
  const { userId } = await auth()

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center ">
            <h1 className="mr-3 text-5xl font-semibold">
              <TypewriterEffectSmooth
                words={[
                  { text: "Find" },
                  { text: "Your" },
                  { text: "Roommate" },
                  { text: "at" },
                  { text: "Flaties", className: "text-purple-600" },
                ]}
                cursorClassName="bg-blue-500"
              />
            </h1>
          </div>

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
               <Button className="mb-2">Go to Dashboard</Button>
              </Link>
          )}

          <p className="mt-3 px-5 max-w-xl text-center text-lg text-gray-500 dark:text-white">
            Flaties helps you connect with roommates who truly vibe with your lifestyle, habits, and budget.
          </p>
        </div>
      </div>
    </div>
  )
}
