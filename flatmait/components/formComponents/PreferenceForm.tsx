type PreferenceData = {
    isSmoker : boolean ;
    socialLevel : number; 
    petsAllowed : boolean; 
    cleanliness: Cleanliness | "";
    sleepSchedule: SleepSchedule | "";
}
type PreferenceFormData = PreferenceData & {
    updateFormData : (data : Partial<PreferenceData>) => void ; 
}

export  function PreferenceForm({isSmoker , socialLevel , petsAllowed , cleanliness , sleepSchedule  , updateFormData} : PreferenceFormData) { 
    return(
      <div className="flex flex-col justify-center content-center space-y-6">
      <h1 className="text-3xl font-semibold">Select Your Preferences</h1>
      <p className="text-zinc-600">This information will help us in finding better matches for you. None of this will be displayed to other users.</p>

      {/* ✅ Smoker */}
      <div>
        <h2 className="font-medium mb-1">Are you a smoker?</h2>
        <label className="mr-4">
          <input
            type="radio"
            name="isSmoker"
            value="true"
            checked={isSmoker === true}
            onChange={() => updateFormData({ isSmoker: true })}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="isSmoker"
            value="false"
            checked={isSmoker === false}
            onChange={() => updateFormData({ isSmoker: false })}
          />{" "}
          No
        </label>
      </div>

      {/* ✅ Pets Allowed */}
      <div>
        <h2 className="font-medium mb-1">Are pets allowed?</h2>
        <label className="mr-4">
          <input
            type="radio"
            name="petsAllowed"
            value="true"
            checked={petsAllowed === true}
            onChange={() => updateFormData({ petsAllowed: true })}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="petsAllowed"
            value="false"
            checked={petsAllowed === false}
            onChange={() => updateFormData({ petsAllowed: false })}
          />{" "}
          No
        </label>
      </div>

      {/* ✅ Cleanliness */}
      <div>
        <h2 className="font-medium mb-1">How clean are you?</h2>
        <select
          value={cleanliness}
          onChange={(e) => updateFormData({ cleanliness: e.target.value as Cleanliness })}
          className="border rounded p-2"
        >
          <option value="" disabled>
            Select cleanliness level
          </option>
          <option value={"Messy"}>Messy</option>
          <option value={"Average"}>Average</option>
          <option value={"CleanFreak"}>CleanFreak</option>
        </select>
      </div>

      <div>
        <h2 className="font-medium mb-1">What is your sleep schedule?</h2>
        <select
          value={sleepSchedule}
          onChange={(e) => updateFormData({ sleepSchedule: e.target.value as SleepSchedule })}
          className="border rounded p-2"
        >
          <option value="" disabled>
            Select sleep schedule
          </option>
          <option value={"EarlyBird"}>Early Bird</option>
          <option value={"NightOwl"}>Night Owl</option>
          <option value={"Flexible"}>Flexible schedule </option>
        </select>
      </div>

      {/* ✅ Social Level */}
      <div>
        <h2 className="font-medium mb-1">How social are you? (0-10)</h2>
        <input
          type="range"
          min={0}
          max={10}
          value={socialLevel}
          onChange={(e) => updateFormData({ socialLevel: parseInt(e.target.value) })}
          className="w-full"
        />
        <p className="text-sm text-zinc-500">Current: {socialLevel}</p>
      </div>
    </div>
    )
}