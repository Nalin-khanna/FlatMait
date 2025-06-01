type Data = {
    city : string ; 
    area : string ; 
    bio : string ; 
}
type LocationFormProps = Data & {
    updateFormData : (data : Partial<Data>) => void ; 
}

export function LocationForm({city , area , bio , updateFormData} : LocationFormProps){
    return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold mb-2">Where are you located?</h2>
      <p className="text-zinc-600 mb-4">Tell us about your location and a little about yourself.</p>

      {/* ✅ City (required) */}
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">City</label>
        <input
          type="text"
          required
          placeholder="Enter your city"
          value={city}
          onChange={(e) => updateFormData({ city: e.target.value })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ✅ Area (required) */}
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Area</label>
        <input
          type="text"
          required
          placeholder="Enter your area or neighborhood"
          value={area}
          onChange={(e) => updateFormData({ area: e.target.value })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ✅ Bio (optional) */}
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Bio (Optional)</label>
        <textarea
          placeholder="Write a short bio..."
          value={bio}
          onChange={(e) => updateFormData({ bio: e.target.value })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
        />
      </div>
    </div>
      
    )
}