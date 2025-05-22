export function BudgetForm() {
    return (
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold">Budget Form</h1>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Minimum Budget</label>
          <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter minimum budget" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Maximum Budget</label>
          <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter maximum budget" />
        </div>
      </div>
    );
  }