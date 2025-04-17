"use client"
import React from 'react';
import { useEffect , useState } from 'react';
import { useSession } from '@clerk/nextjs';
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

    

    return (
        <div className='w-screen min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ' >
            <div>
            <Generate_matches_button></Generate_matches_button>
            </div>
        </div>
    )
}