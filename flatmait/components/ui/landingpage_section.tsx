import { HoverEffect } from "@/src/components/ui/card-hover-effect";
export default function LandingPageSection(){
    return(
        <div className="flex flex-col w-full bg-purple-50">
             <div className="w-full p-16 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-5">
          Why choose Flaties ?
            </h2>
           <p className="text-center text-gray-600 text-lg">
        Our platform matches you with the right roommate based on lifestyle, habits, and preferences—making shared living seamless. 
         </p>
      </div>
      <div className="max-w-7xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
    </div>
    <div className="w-full mt-16">
        <h2 className="text-4xl font-bold text-center mb-5">
         HOW IT WORKS 
        </h2>
    </div>
    <div className="max-w-7xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
</div>
       
    )
}
export const projects = [
    {
      title: "Smart Matching Algorithm ",
      description:
        "We connect you with compatible roommates based on your lifestyle, habits, and preferences.",
      link: "",
    },
    {
      title: "Verified Profiles ",
      description:
        "Every user is authenticated for safety and trust in shared living.",
      link: "",
    },
    {
      title: "Personalized Onboarding ",
      description:
        "Tailored profile setup ensures accurate and meaningful matches.",
      link: "",
    },
  ];