import { prismaClient } from '@/lib/db'
import { verifyWebhook } from '@clerk/nextjs/webhooks'

export async function POST(req: Request) {
    console.log("Webhook endpoint hit")
  try {
    const evt = await verifyWebhook(req
        , {
            signingSecret:process.env.CLERK_WEBHOOK_SIGNING_SECRET,
        }
    )

    // Do something with payload
    // For this guide, log payload to console
   
    const eventType = evt.type
    console.log('Webhook payload:', evt.data)

    if(eventType == 'user.created'){
        try{
            const  id   = evt.data.id  as string
            await prismaClient.user.create(
                {
                    data :{
                        id : id,
                        role : 'EndUser',
                        name : evt.data.first_name || 'New user',
                        age : 0 ,
                        gender : 'Others',
                        minBudget: 0 ,
                        maxBudget : 0 ,
                        preferredGender: 'Others',
                        isSmoker:false,
                        socialLevel: 5,
                        petsAllowed: false,
                        cleanliness: 'Average',
                        sleepSchedule: 'Flexible',
                        profileCompleted: false
                    }
                }
            )
            console.log("user added to db")

        }catch(error){
            console.error('Error creating user:', error);
            return new Response('Error creating user', { status: 500 });
        }
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}