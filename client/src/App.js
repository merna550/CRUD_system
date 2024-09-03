
import Dashboard from './pages/dashboard';
import Classes from './pages/classses';
import SideBar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {
  return (

    <Router>

      <div className="flex">
        <Navbar />
        <SideBar />
        <div className="flex-grow ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
