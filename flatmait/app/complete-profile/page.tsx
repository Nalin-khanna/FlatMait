import Complete_profile_form from '@/components/ui/Complete_profile_form';

export default function Profile() {
  return (
    <div className='min-h-screen bg-[#d5c8db] '>
        <div className="text-center mb-8 pt-25">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Complete Your <span className="text-purple-600">Flaties</span> Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Help us find your perfect roommate match
          </p>
        </div>
        <div className='static'>
          <div>
          <Complete_profile_form></Complete_profile_form>
          </div>
          <div className='absolute bottom-0 right-1'>
            <img src="friends.png" alt="" className='w-100' />
          </div>
           
        </div>
        
        
    </div>
    
  )
}