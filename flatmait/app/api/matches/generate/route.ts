import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import type { User } from "@/src/app/generated/prisma";
import { match } from "assert";
import { UserProfile } from "@clerk/nextjs";

type Cleanliness = "Messy" | "Average" | "CleanFreak";
type SleepSchedule = "EarlyBird" | "NightOwl" | "Flexible";
export  async function POST(req : NextRequest){
    try{
        const {userId} = await req.json()
        if(!userId){
            throw new Error("User is not registered")
        }
        const users = await prismaClient.user.findMany({
            where : {
                id:{not : userId},
                profileCompleted : true
            },
            take : 50 ,
            
        })
        const currUser   = await prismaClient.user.findUnique(
            {
                where : {
                    id : userId,
                    profileCompleted : true
                }
            }
        )

        if(!currUser){
            throw new Error("User profile is not completed")
        }

        const matches = users.map(user =>{
            const score = calculateCompatibilityScore(currUser , user );
            return {
                id : user.id,
                name : user.name,
                age : user.age,
                bio: user.bio,
                gender : user.gender,
                compatibilityScore : score,
                profileImage : user.profilePictureUrl ,
            }
        })
        const sortedMatches = [...matches].sort((a , b) => a.compatibilityScore-b.compatibilityScore)
       

        await prismaClient.matchResult.deleteMany({
            where : {
                id : userId
            }
        })
        for(const match of sortedMatches){
            await prismaClient.matchResult.create(
                {
                    data : {
                        matchedUserId : match.id,
                        compatibilityScore : match.compatibilityScore,
                        userId : userId,
                    }
                }
            )
        }
        return NextResponse.json({matches : sortedMatches}, {status:200});
    }
    catch(error){
        console.error("Error generating matches:", error);
        return NextResponse.json({ error: "Failed to generate matches" }, { status: 500 });
    }

    function calculateCompatibilityScore(user1 : User , user2 : User) :number {
        if (user1.preferredGender !== user2.gender || user2.preferredGender !== user1.gender) {
            return 0; 
          }

          let score = 0;
          const maxScore = 100;
          let totalWeight = 0;

          const weights = {
            budget: 25,          // Budget compatibility is crucial
            cleanliness: 20,     // Cleanliness habits alignment
            socialLevel: 15,     // Social compatibility
            sleepSchedule: 20,   // Sleep schedule compatibility
            smoking: 20,         // Smoking preference matching
            pets: 10              // Pet policy agreement
          };

          for (const weight of Object.values(weights)) {
            totalWeight += weight;
          }
        
        if (
            (user2.minBudget <= user1.maxBudget && user2.maxBudget >= user1.minBudget) &&
            (user1.minBudget <= user2.maxBudget && user1.maxBudget >= user2.minBudget)
          ) {
            // Calculate how much their budget ranges overlap
            const overlapScore = calculateBudgetOverlap(
              user1.minBudget, user1.maxBudget,
              user2.minBudget, user2.maxBudget
            );
            score += weights.budget * overlapScore;
          }
        
          const cleanlinessScore = 1 - (Math.abs(getCleanlinessValue(user1.cleanliness) - getCleanlinessValue(user2.cleanliness)) / 3);
          score += weights.cleanliness * cleanlinessScore;


          const socialDifference = Math.abs(user1.socialLevel - user2.socialLevel);
          // Convert to a 0-1 score (0 = max difference of 10, 1 = no difference)
          const socialScore = 1 - (socialDifference / 10);
          score += weights.socialLevel * socialScore;

          
          if (user1.petsAllowed === user2.petsAllowed) {
            score += weights.pets;
          }

          if (user1.sleepSchedule === user2.sleepSchedule) {
            score += weights.sleepSchedule;
          } else {
            // Partial compatibility for adjacent sleep schedules
            const sleepCompatibility = getSleepScheduleCompatibility(user1.sleepSchedule, user2.sleepSchedule);
            score += weights.sleepSchedule * sleepCompatibility;
          }
        
          




        return 100;
    }
}
function calculateBudgetOverlap(
    min1: number, max1: number, 
    min2: number, max2: number
  ): number {
    // Find the overlap range
    const overlapStart = Math.max(min1, min2);
    const overlapEnd = Math.min(max1, max2);
    
    if (overlapStart > overlapEnd) {
      return 0; // No overlap
    }
    
    // Calculate the overlap as a ratio of the smaller budget range
    const overlap = overlapEnd - overlapStart;
    const range1 = max1 - min1;
    const range2 = max2 - min2;
    const smallerRange = Math.min(range1, range2);
    
    return overlap / smallerRange;
  }

  function getCleanlinessValue(cleanliness: Cleanliness): number {
    switch (cleanliness) {
      case 'CleanFreak':
        return 5;
      case 'Average':
        return 4;
      case 'Messy':
        return 3;
      default:
        return 4; // Default to average
    }
  } 

  function getSleepScheduleCompatibility(schedule1: SleepSchedule, schedule2: SleepSchedule): number {
    // Define compatibility matrix for sleep schedules
    const compatibilityMatrix: Record<SleepSchedule, Record<SleepSchedule, number>> = {
      'EarlyBird': {
        'EarlyBird': 1.0,
        'Flexible': 0.7,
        'NightOwl': 0.3
      },
      'Flexible': {
        'EarlyBird': 0.7,
        'Flexible': 1.0,
        'NightOwl': 0.7
      },
      'NightOwl': {
        'EarlyBird': 0.3,
        'Flexible': 0.7,
        'NightOwl': 1.0
      }
    };
    
    return compatibilityMatrix[schedule1][schedule2] || 0.5;
  } 