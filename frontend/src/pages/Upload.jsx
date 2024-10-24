

export default function Upload() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Excel File for Hierarchical Clustering</h1>
        <form 
          action="http://localhost:5000/api/hierarchical" 
          method="POST" 
          encType="multipart/form-data"
          className="space-y-4"
        >
          <div>
            <label 
              htmlFor="file" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Excel File:
            </label>
            <input 
              type="file" 
              name="file" 
              id="file" 
              accept=".xls,.xlsx"
              className="w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Upload File
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
