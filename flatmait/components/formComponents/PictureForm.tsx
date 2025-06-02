"use client"
import { ChangeEvent } from "react";


type pictureData = {
    profilePictureUrl: string;
}
type PictureFormProps = pictureData & {
    updateFormData : (data : Partial<pictureData>) => void ; 
}

export function PictureForm({profilePictureUrl , updateFormData} : PictureFormProps) {
    const handleFileChange = async (e : ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        console.log(e)
        const file = e.target.files?.[0]
        if (!file) return;

        const formData = new FormData();
        
        formData.append("file", file);
        
          
        try {
            const res = await fetch("/api/upload/cloudinary", {
              method: "POST",
              body: formData,
            });
      
            const data = await res.json();
            console.log(data)
            if (data.url) {
              updateFormData({ profilePictureUrl: data.url });
            } else {
              alert("Upload failed.");
            }
          } catch (err) {
            console.error("Upload error:", err);
          }
        }
    
    
    return ( 
     <div className="space-y-4">
       <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-1 ">Upload Your Profile Picture ?</h1>
            <p className="mb-3 text-zinc-500">Your picture will be displayed on your profile. </p>
            <input autoFocus  type="file" onChange={handleFileChange} />
        {profilePictureUrl && (
          <img src={profilePictureUrl} alt="Preview" 
          width={128}
          height={128}
          className="mt-4 object-cover rounded-full" />
        )}
     </div>
     </div>
    
    )
}