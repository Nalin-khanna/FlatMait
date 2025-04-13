import Complete_profile_form from '@/components/ui/Complete_profile_form';

export default function Profile() {
  return (
    <div>
        <div className='flex items-center justify-center mt-4 '>
        <h1 className="mb-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">The More We Know <span className="text-blue-600 dark:text-blue-500">the better</span> We Match</h1>
        </div>
        <Complete_profile_form></Complete_profile_form>
    </div>
    
  )
}