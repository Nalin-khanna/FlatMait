

type Userdata = {
  name : string;
  age : number;
}
type UserFormProps = Userdata & {
  updateFormData : (data : Partial<Userdata>) => void ; 
}
export function UserForm({name , updateFormData}: UserFormProps) {
  return (
    <div className="space-y-4">
  <div className="flex flex-col">
    <h1 className="text-3xl font-semibold mb-1 ">Whats Your Name ?</h1>
    <p className="mb-3 text-zinc-500">This is how it will be displayed on your profile</p>
    <label className="mb-1 font-semibold">Your Name</label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" autoFocus required type="text" 
    placeholder="Enter Your Full Name" 
    value={name}
    onChange={e => updateFormData({name : e.target.value})}/>
  </div>
  
  <div className="flex flex-col">
  <h1 className="text-3xl font-semibold mb-1 ">Your b-day ?</h1>
  <p className="mb-3 text-zinc-500">Your profile shows your age , not your birthday.</p>
    <label className="mb-1 font-semibold"></label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2
     focus:ring-blue-500 " required type="date" 
     onChange={(e) => {
      const birthDate = new Date(e.target.value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      updateFormData({ age });
    }}/>
  </div>
</div>
    
    
  );
}