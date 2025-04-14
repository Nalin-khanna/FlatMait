import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "@/lib/db";

type Role = "EndUser" | "Admin";

export async function POST(req: NextRequest) {
  const res = await req.json();

  try {
    const user = await prismaClient.user.upsert({
      where: { id: res.userId },
      update: {
        name: res.name,
        age: res.age,
        gender: res.gender,
        minBudget: res.minBudget,
        maxBudget: res.maxBudget,
        preferredGender: res.preferredGender,
        isSmoker: res.isSmoker,
        bio: res.bio,
        socialLevel: res.socialLevel,
        petsAllowed: res.petsAllowed,
        cleanliness: res.cleanliness,
        hobbies: res.hobbies,
        sleepSchedule: res.sleepSchedule,
        profileCompleted: true,
      },
      create: {
        id: res.userId,
        role: "EndUser",
        name: res.name,
        age: res.age,
        gender: res.gender,
        minBudget: res.minBudget,
        maxBudget: res.maxBudget,
        preferredGender: res.preferredGender,
        isSmoker: res.isSmoker,
        bio: res.bio,
        socialLevel: res.socialLevel,
        petsAllowed: res.petsAllowed,
        cleanliness: res.cleanliness,
        hobbies: res.hobbies,
        sleepSchedule: res.sleepSchedule,
        profileCompleted: true,
      },
    });

    await prismaClient.location.upsert({
      where:{
        userId : res.userId,
      }, 
      update : {
        city: res.city , 
        area : res.area , 
      },
      create : {
        city: res.city , 
        area : res.area , 
        user: {
          connect: {
            id: res.userId,
          },
        }
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating/creating user or location:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
