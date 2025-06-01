
type GenderData = {
  gender : Gender | "", 
  preferredGender : Gender | ""
}
type GenderFormProps = GenderData & {
  updateFormData : (data : Partial<GenderData>) => void ; 
}

export function PreferredGenderForm({gender , preferredGender , updateFormData} : GenderFormProps) {
    return (
      <div >
        <h2 className="text-2xl font-semibold mb-4">Your Gender ? </h2>
        <p className="mb-2">Your gender will be shown to others:</p>
        <div className="space-y-2">
        
        <div className="relative">
          <select 
            id="gender" 
            name="Gender" 
            className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 cursor-pointer shadow-sm"
            value={gender}
            onChange={(e) => updateFormData({ gender: e.target.value as Gender})}
          >
            <option value="" disabled className="text-gray-400">
              Select your gender
            </option>
            <option value={"Male"} className="text-gray-700">Male</option>
            <option value={"Female"} className="text-gray-700">Female</option>
            <option value={"Others"} className="text-gray-700">Others</option>
          </select>
         
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-4 mb-4">Your Roommates Gender ? </h2>
        <p className="mb-2">Profile of users with only the selected gender will be shown:</p>
        <div className="space-y-2">
        
        <div className="relative">
          <select 
            id="gender" 
            name="Gender" 
            className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 cursor-pointer shadow-sm"
            value={preferredGender}
            onChange={(e) => updateFormData({ preferredGender: e.target.value as Gender})}
          >
            <option value="" disabled className="text-gray-400">
              Select gender
            </option>
            <option value={"Male"} className="text-gray-700">Male</option>
            <option value={"Female"} className="text-gray-700">Female</option>
            <option value={"Others"} className="text-gray-700">Others</option>
          </select>
         
        </div>
      </div>
      </div>
    );
  }