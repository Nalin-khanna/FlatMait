'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'
import { POST } from '../api/webhooks/route'
import { json } from 'stream/consumers'
import { stringify } from 'querystring'

export const completeOnboarding = async () => {
  const { userId } = await auth()

  if (!userId) {
    return { message: 'No Logged In User' }
  }

  const client = await clerkClient()

  try {
    const res = await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true
      },
    })
    try{const matchesresponse = await fetch('/api/matches/generate',{
        method: 'POST',
        body : JSON.stringify({userId})

    })}
    catch(err){
        return {error : 'There was an error generating matches'}
    }
    return { message: res.publicMetadata }
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' }
  }
}