type BudgetData = {
  minBudget : number , 
  maxBudget : number
}
type BudgetFormProps = BudgetData & {
  updateFormData : (data : Partial<BudgetData>) => void ; 
}

export function BudgetForm({minBudget , maxBudget , updateFormData} : BudgetFormProps) {
    return (
      <div className="space-y-4">
       <div className="flex flex-col">
    <h1 className="text-3xl font-semibold mb-1 ">Whats Your Minimum Budget ?</h1>
    <p className="mb-3 text-zinc-500">You will be shown matches based on your budget. </p>
    <label className="mb-1 font-semibold">Min Budget</label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" autoFocus required type="number" 
    min={1000} 
    value={minBudget}
    onChange={e => updateFormData({minBudget : Number(e.target.value)})}
     />
    <h1 className="text-3xl font-semibold mb-1 ">Whats Your Maximum Budget ?</h1>
    <p className="mb-3 text-zinc-500">You can always change your budget later... </p>
    <label className="mb-1 font-semibold">Max Budget</label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" autoFocus required type="number" 
    min={1000}
    value={maxBudget}
     onChange={e => updateFormData({maxBudget : Number(e.target.value)})}
     />
    </div>
    </div>
    );
  }