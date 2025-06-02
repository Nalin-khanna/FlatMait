import { Heart, MapPin, User } from "lucide-react";
import Image from "next/image";

type Gender = "Male" | "Female" | "Other";

type MatchCardProps = {
    name: string;
    age: number;
    bio: string;
    profilePictureUrl: string;
    location: string;
    gender: Gender | "";
    
}

export function MatchCard({ 
    name, 
    age, 
    bio, 
    gender, 
    profilePictureUrl, 
    location, 
    
}: MatchCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 max-w-sm">
            
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={profilePictureUrl || "/defaultAvatar.jpeg"}
                    alt={`${name}'s profile`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    {age}
                </div>
            </div>

          
            <div className="p-6">
                
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 truncate">
                        {name}
                    </h3>
                    {gender && (
                        <div className="flex items-center text-gray-500">
                            <User size={16} className="mr-1" />
                            <span className="text-sm">{gender}</span>
                        </div>
                    )}
                </div>

              
                <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    <span className="text-sm truncate">{location}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
                    {bio || "No bio available"}
                </p>

                
            </div>
        </div>
    );
}