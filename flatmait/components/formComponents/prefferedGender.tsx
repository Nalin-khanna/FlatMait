export function PreferredGenderForm() {
    return (
      <div >
        <h2 className="text-2xl font-semibold mb-4">Preferred Gender</h2>
        <p className="mb-4">The gender with whom you want to live:</p>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="preferredGender" value="male" className="form-radio text-pink-500" />
            <span className="ml-2">Male</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="preferredGender" value="female" className="form-radio text-pink-500" />
            <span className="ml-2">Female</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="preferredGender" value="others" className="form-radio text-pink-500" />
            <span className="ml-2">Others</span>
          </label>
        </div>
      </div>
    );
  }