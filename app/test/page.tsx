export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind Test Page
        </h1>
        <p className="text-gray-700 mb-4">
          This is a test page to check if Tailwind CSS is working.
        </p>
        <div className="space-y-2">
          <div className="bg-red-500 text-white p-2 rounded">Red Box</div>
          <div className="bg-green-500 text-white p-2 rounded">Green Box</div>
          <div className="bg-blue-500 text-white p-2 rounded">Blue Box</div>
        </div>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Test Button
        </button>
      </div>
    </div>
  );
}
