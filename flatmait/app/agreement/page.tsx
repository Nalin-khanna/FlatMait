"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface FormDataType {
  landlordFullName: string;
  landlordPhone: string;
  landlordAddress: string;
  tenantFullName: string;
  tenantPhone: string;
  tenantAddress: string;
  propertyState: string;
  propertyCity: string;
  houseNo: string;
  streetNo: string;
  monthlyRent: string;
  securityDeposit: string;
  noticePeriod: string;
  agreementValidity: string;
  createdBy: string;
}

export default function RentAgreementForm() {
  const [formData, setFormData] = useState<FormDataType>({
    landlordFullName: "",
    landlordPhone: "",
    landlordAddress: "",
    tenantFullName: "",
    tenantPhone: "",
    tenantAddress: "",
    propertyState: "",
    propertyCity: "",
    houseNo: "",
    streetNo: "",
    monthlyRent: "",
    securityDeposit: "",
    noticePeriod: "",
    agreementValidity: "",
    createdBy: "",
  });
  
  const [result , setResult] = useState<any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  
  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(formData)
  };

  const handlePrint = ()=> {
    const printContents = document.getElementById('printableArea')!.innerHTML;
    const originalContents = document.body.innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow!.document.open();
    printWindow!.document.write(`
      <html>
        <head>
          <style>
            @media print {
              body {
                background-color: #f0f0f0; /* Background color for the entire page */
                color: #000; /* Text color for readability */
                margin: 0;
                padding: 0;
              }
              #experiment{
              text-align: center;
              margin:0;
              padding-bottom:10px;
              }

              #printableArea {
                background-color: #fff; /* Background color for printable area */
                padding: 20px; /* Optional padding for the printable area */
                margin: 20px auto; /* Center the printable area horizontally */
                width: 80%; /* Adjust width to fit well on the page */
                max-width: 800px; /* Maximum width to prevent excessive stretching */
                box-sizing: border-box;
                border: 1px solid #ddd; /* Border for better visibility */
                border-radius: 8px; /* Optional rounded corners */
              }

              .hide-print {
                display: none; /* Hide elements that should not be printed */
              }


              @page {
                size: auto;
                margin: 20mm; /* Margin for printed pages */
              }
            }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    printWindow!.document.close();
    printWindow!.focus();
    printWindow!.print();
    document.body.innerHTML = originalContents;
  };
  

  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#d5c8db]">
        <div className="flex flex-col items-center py-30">
        <div className="mx-auto w-full max-w-7xl p-6 ">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Rent Agreement Form</h1>
          <p className="text-gray-600">Please fill in the details below.</p>
        </div>

        <form className="my-8" onSubmit={handleGenerate}>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Landlord Details */}
            <section className="flex-1 border border-gray-300 rounded-lg p-6 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Landlord Details</h3>
              <LabelInputContainer>
                <Label htmlFor="landlordFullName">Full Name</Label>
                <Input
                  id="landlordFullName"
                  name="landlordFullName"
                  placeholder="Enter landlord's full name"
                  type="text"
                  value={formData.landlordFullName}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="landlordPhone">Phone Number</Label>
                <Input
                  id="landlordPhone"
                  name="landlordPhone"
                  placeholder="Enter phone number"
                  type="tel"
                  value={formData.landlordPhone}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="landlordAddress">Address</Label>
                <Input
                  id="landlordAddress"
                  name="landlordAddress"
                  placeholder="Enter address"
                  type="text"
                  value={formData.landlordAddress}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </section>

            {/* Tenant Details */}
            <section className="flex-1 border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tenant Details</h3>
              <LabelInputContainer>
                <Label htmlFor="tenantFullName">Full Name</Label>
                <Input
                  id="tenantFullName"
                  name="tenantFullName"
                  placeholder="Enter tenant's full name"
                  type="text"
                  value={formData.tenantFullName}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="tenantPhone">Phone Number</Label>
                <Input
                  id="tenantPhone"
                  name="tenantPhone"
                  placeholder="Enter phone number"
                  type="tel"
                  value={formData.tenantPhone}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="tenantAddress">Address</Label>
                <Input
                  id="tenantAddress"
                  name="tenantAddress"
                  placeholder="Enter address"
                  type="text"
                  value={formData.tenantAddress}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </section>
          </div>

          {/* Property Details */}
          <section className="mt-10 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Details</h3>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="propertyState">State</Label>
                <Input
                  id="propertyState"
                  name="propertyState"
                  placeholder="Enter state"
                  type="text"
                  value={formData.propertyState}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="propertyCity">City</Label>
                <Input
                  id="propertyCity"
                  name="propertyCity"
                  placeholder="Enter city"
                  type="text"
                  value={formData.propertyCity}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="houseNo">House No.</Label>
                <Input
                  id="houseNo"
                  name="houseNo"
                  placeholder="Enter house number"
                  type="text"
                  value={formData.houseNo}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="streetNo">Street No.</Label>
                <Input
                  id="streetNo"
                  name="streetNo"
                  placeholder="Enter street number"
                  type="text"
                  value={formData.streetNo}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
          </section>

          {/* Agreement Terms */}
          <section className="mt-10 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Agreement Terms</h3>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="monthlyRent">Monthly Rent (₹)</Label>
                <Input
                  id="monthlyRent"
                  name="monthlyRent"
                  placeholder="Enter monthly rent"
                  type="number"
                  value={formData.monthlyRent}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="securityDeposit">Security Deposit (₹)</Label>
                <Input
                  id="securityDeposit"
                  name="securityDeposit"
                  placeholder="Enter security deposit"
                  type="number"
                  value={formData.securityDeposit}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="noticePeriod">Notice Period (Days)</Label>
                <Input
                  id="noticePeriod"
                  name="noticePeriod"
                  placeholder="Enter notice period"
                  type="number"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="agreementValidity">Agreement Validity (Months)</Label>
                <Input
                  id="agreementValidity"
                  name="agreementValidity"
                  placeholder="Enter validity"
                  type="number"
                  value={formData.agreementValidity}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mt-4">
              <Label htmlFor="createdBy">Created By</Label>
              <Input
                id="createdBy"
                name="createdBy"
                placeholder="Enter your name"
                type="text"
                value={formData.createdBy}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </section>

          <button
            className="mt-10 group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white "
            type="submit"
          >
            Generate 
          </button>
        </form>
      </div>
      
      
    </div>
    {
        result && (
            <div id="printableArea" className="mt-8 w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
             <h2 className="text-2xl font-bold mb-4 text-center" id="experiment">Rental Agreement form</h2>
             <p>
            This Rental Agreement is made and entered into on {}, by and between: </p>
            <div>
            <h3 className="font-bold text-lg mb-2">Landlord:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full Name: {formData.landlordFullName}</li>
              <li>Phone Number: {formData.landlordPhone}</li>
              <li>Address: {formData.landlordAddress}</li>
            </ul>
          </div>
           
          <div className="text-center font-bold text-lg">
            AND
          </div>

          {/* Tenant Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Tenant:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full Name: {formData.tenantFullName}</li>
              <li>Phone Number: {formData.tenantPhone}</li>
              <li>Address: {formData.tenantAddress}</li>
            </ul>
          </div>

          <p>Collectively referred to as &quot;the Parties.&quot;</p>

           {/* Clauses */}
           <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base mb-2">1. PREMISES</h3>
              <p>
                The Landlord hereby rents to the Tenant the residential premises located at:{' '}
                <strong>House No.:</strong> {formData.houseNo},{' '}
                <strong>Street No.:</strong> {formData.streetNo},{' '}
                <strong>City:</strong> {formData.propertyCity},{' '}
                <strong>State:</strong> {formData.propertyState} .
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">2. TERM OF AGREEMENT</h3>
              <p>
                This Agreement shall be valid for a period of <strong>{formData.agreementValidity}</strong>, commencing from the date of signing. Either party may terminate this agreement by providing written notice as described in Clause 7.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">3. RENT</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The Tenant agrees to pay the Landlord a monthly rent of <strong>₹{formData.monthlyRent}</strong>.</li>
                <li>Rent is due on or before the 5th day of each calendar month.</li>
                <li>Payment shall be made via bank transfer, UPI, cheque, or any mutually agreed mode of payment.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">4. SECURITY DEPOSIT</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The Tenant shall pay a one-time refundable security deposit of <strong>₹{formData.securityDeposit}</strong> at the time of signing this Agreement.</li>
                <li>The deposit shall be held by the Landlord and refunded (minus any applicable deductions for damages or unpaid rent) within 30 days of termination of this Agreement.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">5. USE OF PREMISES</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The Premises shall be used solely for residential purposes by the Tenant.</li>
                <li>No sub-letting, sharing, or commercial activity shall be allowed without prior written consent of the Landlord.</li>
                <li>The Tenant agrees to maintain the Premises in good condition and comply with all local laws and housing regulations.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">6. MAINTENANCE AND REPAIRS</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The Landlord shall be responsible for major structural repairs and regular maintenance of external infrastructure.</li>
                <li>The Tenant shall be responsible for routine day-to-day maintenance including plumbing, electrical issues, and cleanliness.</li>
                <li>The Tenant must notify the Landlord promptly of any damages or repairs needed.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">7. NOTICE PERIOD</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Either Party may terminate this Agreement by providing a minimum of <strong>{formData.noticePeriod}</strong> written notice.</li>
                <li>In case of early termination without notice, the party at fault shall be liable to pay one month&apos;s rent as compensation.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">8. RIGHTS AND RESPONSIBILITIES</h3>
              <div className="ml-4">
                <h4 className="font-bold mb-1">Landlord:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>To ensure the peaceful enjoyment of the Premises by the Tenant.</li>
                  <li>Not to disturb the possession or privacy of the Tenant without valid reason.</li>
                </ul>
                <h4 className="font-bold mb-1 mt-2">Tenant:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>To not engage in illegal activities on the Premises.</li>
                  <li>To not cause any nuisance to neighbors or damage to the property.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">9. INSPECTION</h3>
              <p>The Landlord reserves the right to inspect the Premises with prior 24-hour notice, or immediately in case of emergency.</p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">10. GOVERNING LAW</h3>
              <p>
                This Agreement shall be governed by the laws of the State of <strong>{formData.propertyState}</strong>, India. Any disputes arising under this Agreement shall be subject to the jurisdiction of the appropriate courts located in <strong>{formData.propertyCity}</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">11. ENTIRE AGREEMENT</h3>
              <p>This document constitutes the entire Rental Agreement between the Parties. No oral statements or prior written material not specifically incorporated herein shall be of any force or effect.</p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">12. AMENDMENTS</h3>
              <p>No amendment, change, or modification of this Agreement shall be valid unless in writing and signed by both Parties.</p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">13. ACKNOWLEDGEMENT</h3>
              <p>By signing below, both Parties acknowledge that they have read, understood, and agreed to all terms and conditions outlined in this Agreement.</p>
            </div>
            
          </div>
          
          <div className="mt-12 space-y-8">
            <p className="font-bold text-center">
              IN WITNESS WHEREOF, the Parties have executed this Agreement on the day, month, and year first written above.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p><strong>Landlord Signature:</strong> _________________________</p>
                <p className="mt-2">Name: {formData.landlordFullName}</p>
                <p className="mt-2">Date: ___________</p>
              </div>
              
              <div>
                <p><strong>Tenant Signature:</strong> __________________________</p>
                <p className="mt-2">Name: {formData.tenantFullName}</p>
                <p className="mt-2">Date: ___________</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p><strong>Created By:</strong> {formData.createdBy}</p>
            </div>
          </div>

          <div>
          <Button className="mt-6 rounded-full hide-print" onClick={handlePrint}>
            Print as PDF
          </Button>
          </div>
          </div>
          
        )
      }
        </div>
        
    </div>
    
           
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
