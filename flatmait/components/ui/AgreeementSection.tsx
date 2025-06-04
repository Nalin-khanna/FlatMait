import Link from 'next/link';
export default function AgreementSection () {
    return(
        <div className="flex w-full h-180 bg-[#d5c8db]">
            <div className="w-1/2 p-16 mt-35 ">
                <div className="container mx-auto px-20">
                    <h2 className="text-5xl font-bold mb-5 font">
                        Generate Rental Agreements <br></br> Instantly in a Few Clicks.
                    </h2>
                    <p className="text-xl text-stone-700 mb-8">Generate and download your rental agreements online in just a few seconds.</p>
                    <Link href={"/agreement"}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Create Now
                    </button>
                    </Link>
                    
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center p-16">
                <img 
                    src="contract.png" 
                    alt="Rental agreement documents" 
                    className="max-w-full max-h-full object-contain rounded-lg "
                />
            </div>
        </div>
    )
}