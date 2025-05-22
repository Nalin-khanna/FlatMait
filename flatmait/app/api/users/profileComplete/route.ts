import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@/lib/db";


export async function POST(req: NextRequest) {
  const formdata = await req.json();
  console.log("req recieved");
  try {
    const user = await prismaClient.user.upsert({
      where: { id: formdata.userId },
      update: {
        name: formdata.name,
        age: formdata.age,
        gender: formdata.gender,
        minBudget: formdata.minBudget,
        maxBudget: formdata.maxBudget,
        preferredGender: formdata.preferredGender,
        isSmoker: formdata.isSmoker,
        bio: formdata.bio,
        socialLevel: formdata.socialLevel,
        petsAllowed: formdata.petsAllowed,
        cleanliness: formdata.cleanliness,
        hobbies: formdata.hobbies,
        sleepSchedule: formdata.sleepSchedule,
        profileCompleted: true,
      },
      create: {
        id: formdata.userId,
        role: "EndUser",
        name: formdata.name,
        age: formdata.age,
        gender: formdata.gender,
        minBudget: formdata.minBudget,
        maxBudget: formdata.maxBudget,
        preferredGender: formdata.preferredGender,
        isSmoker: formdata.isSmoker,
        bio: formdata.bio,
        socialLevel: formdata.socialLevel,
        petsAllowed: formdata.petsAllowed,
        cleanliness: formdata.cleanliness,
        hobbies: formdata.hobbies,
        sleepSchedule: formdata.sleepSchedule,
        profileCompleted: true,
      },
    });

    await prismaClient.location.upsert({
      where:{
        userId : formdata.userId,
      }, 
      update : {
        city: formdata.city , 
        area : formdata.area , 
      },
      create : {
        city: formdata.city , 
        area : formdata.area , 
        user: {
          connect: {
            id: formdata.userId,
          },
        }
      }
    });
    console.log("User and location updated/created successfully");
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating/creating user or location:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
