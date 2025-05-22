"use client"
import React from "react";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { completeOnboarding } from "@/app/complete-profile/_actions";
import { useMultistepForm } from "@/lib/useMultistepForm";
import { useRouter } from "next/navigation";
import { BudgetForm } from "../formComponents/budgetForm";
import { UserForm } from "../formComponents/userForm";
import { PreferredGenderForm } from "../formComponents/prefferedGender";
type FormData = {
  name: string;
  age: number;
  gender: Gender | "";
  minBudget: number;
  maxBudget: number;
  preferredGender: Gender | "";
  isSmoker: boolean;
  bio: string;
  profilePictureUrl: string;
  socialLevel: number;
  petsAllowed: boolean;
  cleanliness: Cleanliness | "";
  hobbies: string;
  sleepSchedule: SleepSchedule | "";
  city: string;
  area: string;
  role: Role | "";
};

export default function Complete_profile_form() {
  const { userId } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 18,
    gender: "",
    minBudget: 2000,
    maxBudget: 3000,
    preferredGender: "",
    isSmoker: false,
    bio: "",
    profilePictureUrl: "",
    socialLevel: 5,
    petsAllowed: false,
    cleanliness: "",
    hobbies: "",
    sleepSchedule: "",
    city: "",
    area: "",
    role: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!userId) {
        console.log('Authentication error. Please try again.');
        return;
      }
      await fetch("/api/users/profileComplete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...formData
        }),
      });
      console.log("req sent");
      await completeOnboarding();
      console.log("onboarding complete, redirecting to home page");
      router.push("/dashboard")
    } catch (error) {
      console.log(error);
    }
  };

  const {steps , step , currentStepIndex ,isFirstStep , isLastStep , back , next} = useMultistepForm([<UserForm/>, <BudgetForm/> , <PreferredGenderForm/>]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Complete Your <span className="text-purple-600">Flaties</span> Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Help us find your perfect roommate match
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gradient-to-r from-violet-200 to-pink-200 h-2">
            <div 
              className="bg-white h-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Step Counter */}
          <div className="bg-gradient-to-r from-violet-300 to-pink-300 px-8 py-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold">
                  {currentStepIndex + 1}
                </div>
                <span className="font-medium">
                  Step {currentStepIndex + 1} of {steps.length}
                </span>
              </div>
              <div className="text-sm opacity-90">
                {currentStepIndex === 0 ? "Personal Information" : "Budget & Preferences"}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                {step}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                {isFirstStep ? (
                  <div></div>
                ) : (
                  <button 
                    className="px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300" 
                    type="button" 
                    onClick={back}
                  >
                    ← Back
                  </button>
                )}
                
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg"
                  type="button" 
                  onClick={next}
                >
                  {isLastStep ? 'Complete Profile ✨' : 'Next Step →'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          Your information is secure and will only be used to find compatible roommates
        </div>
      </div>
    </div>
  );
}