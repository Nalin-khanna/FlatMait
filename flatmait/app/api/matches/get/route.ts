import { NextRequest } from "next/server";
import {prismaClient} from "@/lib/db";    
export async function GET(req: NextRequest) {
    try{
        const {userId} = await req.json()
        if(!userId){
            throw new Error("User is not registered")
        }
        const matchedUsers = await prismaClient.matchResult.findMany({
            where : {
                userId : userId,
            },
            include : {
               matchedUser : {
                select : {
                    id : true,
                    name : true,
                    age : true,
                    bio : true,
                    gender : true,
                    profilePictureUrl : true,
                    location : true,
                }
               }
            },
            orderBy : {
                compatibilityScore : "desc"
            }
        });
        return new Response(JSON.stringify(matchedUsers),{status : 200})
    }
    catch(e){
        return new Response("Internal Server Error",{status : 500})
    }
}