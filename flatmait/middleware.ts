import { clerkMiddleware , createRouteMatcher } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/', '/api/matches(.*)'])
const isOnboardingRoute = createRouteMatcher(['/','/complete-profile']);

export default clerkMiddleware(async (auth, req : NextRequest) => {
  const { userId, sessionClaims } = await auth()
  

// For users visiting /onboarding, don't try to redirect
  if (userId && isOnboardingRoute(req)) {
    return NextResponse.next()
  }
  // if user is not signed in and accessing private routes
  if (!userId && !isPublicRoute(req)) await auth.protect()

  // Catch users who do not have `onboardingComplete: true` in their publicMetadata
  // Redirect them to the /onboarding
  if (userId && !sessionClaims?.metadata?.onboardingComplete) {
    const onboardingUrl = new URL('/complete-profile', req.url)
    return NextResponse.redirect(onboardingUrl)
  }

  // If the user is logged in and the route is protected, let them view.
  if (userId && !isPublicRoute(req)) return NextResponse.next()

  })
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};