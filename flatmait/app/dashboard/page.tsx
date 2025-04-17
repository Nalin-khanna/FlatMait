"use client"
import React from 'react';
import { useEffect , useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import type { Location } from '@/src/app/generated/prisma';
import type { User } from '@/src/app/generated/prisma';
import Generate_matches_button from '@/components/ui/Generate_matches_button';


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
    if(isLoading){
        return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>);
    }
    return (
        <div className='w-screen min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ' >
            <div className="container mx-auto px-4 py-8" >
            <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Your Matches</h1>
                    <Generate_matches_button />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matches.map((match) => (
                        <div key={match.id} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex items-center mb-4"> 
                            <img
                                    src={match.matchedUser.profilePictureUrl || '/default-avatar.png'}
                                    alt={match.matchedUser.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                    {(match.compatibilityScore * 100).toFixed(0)}% Match
                                </div>
                            </div>
                            <div className='p-6'>
                                <div className='flex justify-between items-start mb-4'>
                                    <div>
                                        <h3 className='text-xl font-semibold text-gray-800'>
                                            {match.matchedUser.name}, {match.matchedUser.age}
                                        </h3>
                                        <p className='text-gray-600'>
                                            {match.matchedUser.gender}
                                        </p>
                                    </div>
                                </div>
                                {
                                    match.matchedUser.bio && (
                                        <p className='text-gray-600'>
                                            {match.matchedUser.bio}
                                        </p>
                                    )
                                }
                                {
                                    match.matchedUser.location && (
                                      <div className='flex items-center text-gray-500'>
                                        <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                            </svg>
                                            <span>{match.matchedUser.location.area} , 
                                                {match.matchedUser.location.city},
                                            </span>

                                      </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
            </div>
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