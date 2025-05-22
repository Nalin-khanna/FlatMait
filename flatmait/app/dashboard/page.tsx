"use client"
import React from 'react';
import { useEffect , useState } from 'react';
import { useAuth } from '@clerk/nextjs';



export default function(){
    const [isLoading, setIsLoading] = useState(true);
    const {userId} = useAuth();
    

   
    if(isLoading){
        return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>);
    }
    return (
       <>
       </>
    )
}