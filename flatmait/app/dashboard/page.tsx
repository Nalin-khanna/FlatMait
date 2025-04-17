"use client"
import React from 'react';
import { useEffect , useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import type { Location } from '@/src/app/generated/prisma';
import type { User } from '@/src/app/generated/prisma';
import Generate_matches_button from '@/components/ui/Generate_matches_button';
import { FocusCards } from '@/src/components/ui/focus-cards';

type Gender = 'Male' | 'Female' | 'Others';
interface MatchedUser {
    id: string;
    name: string;
    age : number,
    bio : string | null,
    gender : Gender,
    profilePictureUrl : string | null,
    location : Location | null,
  }

  interface MatchResult {
    id : string,
    userId : string,
    matchedUserId : string,
    matchedUser : MatchedUser,
    compatibilityScore : number,
  }
export default function(){
    const [matches, setMatches] = useState<MatchResult[]>([]);
    const [user, setUser] = useState<User>();
    const [locations, setLocations] = useState<Location[]>();
    const [isLoading, setIsLoading] = useState(true);
    const {userId} = useAuth();
    useEffect(() => {
        const fetchData = async () => {
          if(!userId) return;
          try{
            const response = await fetch(`/api/matches/get?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(!response.ok){
                throw new Error('Failed to fetch matches');
            }
            const data = await response.json();
            setMatches(data); 
          }
          catch(err){
            console.error('Error fetching matches:', err);  // Using console.error for better error logging
          }
          finally{
            setIsLoading(false);
          }
        };
        fetchData();
    }, [userId]);

    const cards = matches.map(match => (
        {
            key : match.id,
            title : match.matchedUser.name,
            gender : match.matchedUser.gender,
            bio : `Bio : ${match.matchedUser.bio}`,
            location : match.matchedUser.location?.area,
            
        }
    ))
    if(isLoading){
        return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>);
    }
    return (
        <div className='w-screen min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ' >
            <div className="container mx-auto px-4 py-8" >
               <FocusCards cards={cards.map(card => ({
                   ...card,
                   location: card.location ? {
                       area: card.location,
                       city: card.location
                   } : undefined
               }))} />
            {matches.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-xl text-gray-600">No matches found yet</h3>
                        <p className="text-gray-500 mt-2">Generate matches to find your perfect flatmate!</p>
                    </div>
                )}
        </div>
        </div>
    )
}