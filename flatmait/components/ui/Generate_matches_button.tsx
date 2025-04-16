"use client"
import { useAuth } from "@clerk/nextjs"

export default function Generate_matches_button(){
    const {userId} = useAuth();
    const handleClick = async() =>{
        
        if(!userId){
            return { message: 'No Logged In User' }
        }
        try{
            const matchesresponse = await fetch('/api/matches/generate',{
                method: 'POST',
                body : JSON.stringify({userId})
        
            })
        }
        catch(error){
            return { error: 'There was an error generating the matches for user' }
        }
    }
    return(
        <div>
            <button className="border m-3 p-1" onClick={handleClick}> Generate matches for you </button>
        </div>
    )
}