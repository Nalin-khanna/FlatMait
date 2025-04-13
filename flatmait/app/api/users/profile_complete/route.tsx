import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import { currentUser } from "@clerk/nextjs/server";


export async function POST(req : NextRequest){
    const data = await req.json()
    console.log(data)
    return NextResponse.json(data)
}