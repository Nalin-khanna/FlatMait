import { Button } from "@/components/ui/button"
import ColourfulText from "@/components/ui/colourful-text"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId, redirectToSignIn } = await auth()
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className=" flex flex-col items-center text center">
          <div className="flex items-center ">
          <h1 className="mr-3 text-5xl font-semibold">
            <TypewriterEffectSmooth words={[
              {text: "Find"},
              {text: "Your"},
              {text: "Roommate"},
              {text: "at"},
              {text: "FlatMait", className:"text-purple-600"},
            ]} cursorClassName="bg-blue-500"></TypewriterEffectSmooth>
          </h1>
          
          </div>
          {userId && <Button>Test Button </Button>}
          <p className="mt-3 px-5 max-w-xl text-center text-lg text-gray-500 dark:text-white">FlatMait helps you connect with roommates who truly vibe with your lifestyle, habits, and budget.</p>
        </div>
      </div>
    </div>
  )
}
