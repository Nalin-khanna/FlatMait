import { NextRequest } from "next/server";
import {prismaClient} from "@/lib/db";    
export async function GET(req: NextRequest) {
    try{
        const url = new URL(req.url);
        const userId = url.searchParams.get('userId');
        if (!userId) {
            return new Response(JSON.stringify({ error: "User ID is required" }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        try{
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
            return new Response(JSON.stringify(matchedUsers), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch (e) {
            console.error("Database error:", e);
            return new Response(JSON.stringify({ error: "Error fetching from database" }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        
       
    }
    catch (e) {
        console.error("Server error:", e);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}