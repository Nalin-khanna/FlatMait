"use client"
import React from 'react';
import { useEffect , useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { MatchCard } from '@/components/ui/MatchCard';
type Match = {
    id: string;
    name: string;
    age: number;
    bio: string;
    profilePictureUrl: string;
    location: string;
    gender: "Male" | "Female" | "Other" | "";
    compatibilityScore?: number;
}
export default function Dashboard(){
    const {userId} = useAuth();
    const [matches, setMatches] = useState([]);
    useEffect(()=>{
        const fetchdata = async()=>{
            if(!userId) return;
            try{
                await fetch('/api/matches/generate' , {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({userId}),
    
                }  
                )
            }catch(e){
                console.error("Error generating matches:", e);
            }
           
           try{
            const response = await fetch(`/api/matches/get?userId=${userId}`,{
                method : "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok){
                throw new Error('Failed to fetch matches');
            }
            const data = await response.json();
            setMatches(data);
            console.log(matches);
           }catch(e){

           } 
        }
        fetchdata();
    },[])
    
    return (
        <div className="flex justify-center items-center h-screen bg-[#d5c8db]">
            {matches.length === 0 ? (
                <p>Loading matches...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {matches.map((match: Match) => (
                            <MatchCard
                                key={match.id}
                                name={match.name}
                                age={match.age}
                                bio={match.bio}
                                gender={match.gender}
                                profilePictureUrl={match.profilePictureUrl}
                                location={match.location}                               
                            />
                        ))}
                    </div>
            )}
        </div>
    );
   
}