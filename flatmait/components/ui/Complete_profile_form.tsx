'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { number } from 'zod';

type Gender = 'Male' | 'Female' | 'Others';
type Cleanliness = 'Messy' | 'Average' | 'CleanFreak';
type SleepSchedule = 'EarlyBird' | 'NightOwl' | 'Flexible';

interface FormData {
  name: string;
  age: number;
  gender: Gender;
  minBudget: number;
  maxBudget: number;
  preferredGender: Gender;
  isSmoker: boolean;
  bio: string;
  socialLevel: number;
  petsAllowed: boolean;
  cleanliness: Cleanliness;
  hobbies: string;
  sleepSchedule: SleepSchedule;
  city: string;
  area: string;
}


export default function Complete_profile_form() {
  const router = useRouter();
  const { userId } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form data state
  const [formData, setFormData] = useState({
    name: 'user',
    age: 18,
    gender: 'Others' as Gender,
    minBudget: 5000,
    maxBudget: 15000,
    preferredGender: 'Others' as Gender,
    isSmoker: false,
    bio: '',
    socialLevel: 5,
    petsAllowed: false,
    cleanliness: 'Average' as Cleanliness,
    hobbies: '',
    sleepSchedule: 'Flexible' as SleepSchedule,
    city: '',
    area: '',
  });

  const handleChange = (e: any) => {
    
    const { name, value } = e.target;
    
    let newValue: any = value;
  
    // Convert to number for numeric fields
    if (['age', 'minBudget', 'maxBudget', 'socialLevel'].includes(name)) {
      newValue = parseInt(value, 10);
    }
  
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  
    console.log('this is changed', name, 'to', newValue);
    console.log(e.target)
  };
  
  // Define all onboarding steps
  const steps = [
    {
      title: "What's your name?",
      field: "name",
      component: (
        <div className="w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      )
    },
    {
      title: "How old are you?",
      field: "age",
      component: (
        <div className="w-full">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="18"
            max="100"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      )
    },
    {
      title: "What's your gender?",
      field: "gender",
      component: (
        <div className="flex flex-col space-y-3 w-full">
          {(['Male', 'Female', 'Others'] as Gender[]).map((option) => (
            <label key={option} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
                onChange={handleChange}
                className="mr-3 text-purple-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "What's your budget range for rent?",
      field: "budget",
      component: (
        <div className="w-full space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Minimum Budget (₹)</label>
            <input
              type="number"
              name="minBudget"
              value={formData.minBudget}
              onChange={handleChange}
              min="1000"
              step="500"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Maximum Budget (₹)</label>
            <input
              type="number"
              name="maxBudget"
              value={formData.maxBudget}
              onChange={handleChange}
              min={formData.minBudget}
              step="500"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>
      )
    },
    {
      title: "What gender do you prefer to live with?",
      field: "preferredGender",
      component: (
        <div className="flex flex-col space-y-3 w-full">
          {(['Male', 'Female', 'Others'] as Gender[]).map((option) => (
            <label key={option} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="preferredGender"
                value={option}
                checked={formData.preferredGender === option}
                onChange={handleChange}
                className="mr-3 text-purple-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "Do you smoke?",
      field: "isSmoker",
      component: (
        <div className="flex flex-col space-y-3 w-full">
          {[
            { value: true, label: "Yes" },
            { value: false, label: "No" }
          ].map((option) => (
            <label key={option.label} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="isSmoker"
                value={String(option.value)}
                checked={formData.isSmoker === option.value}
                onChange={(e) => handleChange({
                  target: {
                    name: 'isSmoker',
                    value: e.target.value === 'true'
                  }
                } as any)}
                className="mr-3 text-purple-600"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "Tell us about yourself",
      field: "bio",
      component: (
        <div className="w-full">
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Share a bit about yourself, your interests, lifestyle, etc."
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )
    },
    {
      title: "How social are you?",
      field: "socialLevel",
      component: (
        <div className="w-full">
          <input
            type="range"
            name="socialLevel"
            value={formData.socialLevel}
            onChange={handleChange}
            min="1"
            max="10"
            step="1"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Introverted (1)</span>
            <span>Balanced (5)</span>
            <span>Extroverted (10)</span>
          </div>
        </div>
      )
    },
    {
      title: "Are pets allowed?",
      field: "petsAllowed",
      component: (
        <div className="flex flex-col space-y-3 w-full">
          {[
            { value: true, label: "Yes" },
            { value: false, label: "No" }
          ].map((option) => (
            <label key={option.label} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="petsAllowed"
                value={String(option.value)}
                checked={formData.petsAllowed === option.value}
                onChange={(e) => handleChange({
                  target: {
                    name: 'petsAllowed',
                    value: e.target.value === 'true'
                  }
                } as any)}
                className="mr-3 text-purple-600"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "What's your cleanliness level?",
      field: "cleanliness",
      component: (
        <div className="flex flex-col space-y-3 w-full">
          {[
            { value: 'Messy', label: "Messy - I'll clean when I feel like it" },
            { value: 'Average', label: "Average - I keep things generally tidy" },
            { value: 'CleanFreak', label: "Clean Freak - Everything must be spotless" }
          ].map((option) => (
            <label key={option.value} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="cleanliness"
                value={option.value}
                checked={formData.cleanliness === option.value}
                onChange={handleChange}
                className="mr-3 text-purple-600"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "What are your hobbies?",
      field: "hobbies",
      component: (
        <div className="w-full">
          <textarea
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="List your hobbies, separated by commas"
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )
    },
    {
      title: "What's your sleep schedule like?",
      field: "sleepSchedule",
      component: (
        <div className="flex flex-col space-y-3 w-full">
          {[
            { value: 'EarlyBird', label: "Early Bird - Early to bed, early to rise" },
            { value: 'NightOwl', label: "Night Owl - I stay up late" },
            { value: 'Flexible', label: "Flexible - My schedule varies" }
          ].map((option) => (
            <label key={option.value} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50">
              <input
                type="radio"
                name="sleepSchedule"
                value={option.value}
                checked={formData.sleepSchedule === option.value}
                onChange={handleChange}
                className="mr-3 text-purple-600"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "Where do you want to live?",
      field: "location",
      component: (
        <div className="w-full space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Area/Neighborhood</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter area or neighborhood"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>
      )
    }
  ];



  // Handle form navigation
  const handleNext = () => {
    // Validate current step before proceeding
    if (validateCurrentStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Validate current step
  const validateCurrentStep = () => {
    const currentField = steps[currentStep].field;
    
    // Basic validation for required fields
    switch (currentField) {
      case 'name':
        if (!formData.name.trim()) {
          setError('Please enter your name');
          return false;
        }
        break;
      
      case 'age':
        if(!formData.age){
          setError("Please enter your age")
          return false;
        }
        break;  
      case 'budget':
        if (formData.minBudget <= 0 || formData.maxBudget <= 0) {
          setError('Please enter valid budget values');
          return false;
        }
        else if (!(formData.minBudget&&formData.maxBudget)){
          setError('Please enter valid budget values');
          return false;
        }
        else if (formData.minBudget < 2000){
          setError('Your minimum budget should be 2000');
          return false;
        }
        else if (formData.maxBudget < 3000){
          setError('Your max budget should at least be 3000');
          return false;
        }
        else if (formData.maxBudget < formData.minBudget){
          setError('Max budget should be more than min budget');
          return false;
        }
        break;
      
      case 'location':
        if (!formData.city.trim() || !formData.area.trim()) {
          setError('Please enter both city and area');
          return false;
        }
        break;
      default:
        break;
    }
    
    setError('');
    return true;
  };

  // Submit form
  const handleSubmit = async () => {
    if (!userId) {
      setError('Authentication error. Please try again.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/users/profile_complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId,
            ...formData
        }
          
        ),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to complete profile');
      }

      // Redirect to dashboard on success
      router.push('/dashboard');
    } catch (error : any) {
      console.error('Error submitting profile:', error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Calculate progress percentage
  const progress = Math.round((currentStep / (steps.length - 1)) * 100);

  return (
    <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
          <p className="mt-2 text-sm text-gray-600">
            Let's find you the perfect roommate
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div 
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Step indicator */}
        <div className="text-sm text-gray-500 mb-6">
          Step {currentStep + 1} of {steps.length}
        </div>

        {/* Question title */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          {steps[currentStep].title}
        </h2>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Dynamic form component for current step */}
        <div className="mb-8">
          {steps[currentStep].component}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0 || loading}
            className={`px-4 py-2 rounded-lg ${
              currentStep === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={loading}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : currentStep === steps.length - 1 ? (
              'Complete'
            ) : (
              'Next'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}