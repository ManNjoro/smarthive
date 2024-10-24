import { BrowserRouter as Router, Routes, Rout } from 'react-router-dom';
import Navbar from './components/Navbar';
import Upload from './pages/Upload';
// The Upload component you shared earlier

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
