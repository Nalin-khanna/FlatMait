export {}

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean
    }
  };
  type SleepSchedule = "EarlyBird" | "NightOwl" | "Flexible";
  type Gender = "Male" | "Female" | "Others";
  type Cleanliness = "Messy" | "Average" | "CleanFreak";
  type Role = "EndUser" | "Admin";
}