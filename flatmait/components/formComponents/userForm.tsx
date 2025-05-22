export function UserForm() {
  return (
    <div className="space-y-4">
  <div className="flex flex-col">
    <label className="mb-1 font-semibold">First Name</label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" autoFocus required type="text" />
  </div>
  <div className="flex flex-col">
    <label className="mb-1 font-semibold">Last Name</label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required type="text" />
  </div>
  <div className="flex flex-col">
    <label className="mb-1 font-semibold">Age</label>
    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required type="number" />
  </div>
</div>
  );
}