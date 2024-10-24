import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// http://localhost:5000/api/hierarchical
export default function Upload() {
  const [formData, setFormData] = useState({
    file: null,
  });
  const [clusters, setClusters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPredictions, setShowPredictions] = useState(false);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", formData.file);

    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:5000/api/hierarchical", data);
      if (res.status === 200) {
        toast.success(res.data.message);
        setClusters(res.data.clusters);
      }
    } catch (error) {
      console.error(error);
      toast.error("File upload failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

   // Function to format the date from different columns
   const formatDateTime = (year, day, month) => {
    // Assume year is 2024, or you can pass year if available
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(); // Returns a formatted date-time string
  };

  // Function to format the time
const formatTime = (hours, minute) => {
    const time = new Date(2024, 0, 1, hours, minute); // Dummy date with time
    return time.toLocaleTimeString([], { hour: '2-digit' , minute: '2-digit'}); // Format the time as HH:MM
  };

  const togglePredictions = () => {
    setShowPredictions(!showPredictions);
  };
  console.log(clusters);
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Upload Excel File for Hierarchical Clustering
        </h1>
        <form
          onSubmit={handleSubmit}
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
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isLoading ? "bg-opacity-50" : ""
              }`}
            >
              {isLoading ? "Uploading..." : "Upload File"}
            </button>
          </div>
        </form>
      </div>

      {clusters.length > 0 && (
        <button
          onClick={togglePredictions}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        >
          {showPredictions ? "Hide Predictions" : "Show Predictions"}
        </button>
      )}

      {showPredictions && clusters.length > 0 && (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4">Cluster</th>
                <th className="py-2 px-4">Country</th>
                <th className="py-2 px-4">Customer ID</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Invoice Day of Week</th>
                <th className="py-2 px-4">Invoice No</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Stock Code</th>
                <th className="py-2 px-4">Total Price</th>
                <th className="py-2 px-4">Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {clusters.map((cluster, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="py-2 px-4">{cluster.Cluster}</td>
                  <td className="py-2 px-4">{cluster.Country}</td>
                  <td className="py-2 px-4">{cluster.CustomerID}</td>
                  <td className="py-2 px-4">{formatDateTime(
                    cluster.InvoiceYear,
                      cluster.InvoiceDay,
                      cluster.InvoiceMonth
                    )}</td>
                    <td className="py-2 px-4">
        {formatTime(cluster.InvoiceHour, cluster.InvoiceMinute)} {/* New Time Column */}
      </td>
                  <td className="py-2 px-4">{cluster.InvoiceDayOfWeek}</td>
                  <td className="py-2 px-4">{cluster.InvoiceNo}</td>
                  <td className="py-2 px-4">{cluster.Quantity}</td>
                  <td className="py-2 px-4">{cluster.StockCode}</td>
                  <td className="py-2 px-4">{cluster.TotalPrice}</td>
                  <td className="py-2 px-4">{cluster.UnitPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
