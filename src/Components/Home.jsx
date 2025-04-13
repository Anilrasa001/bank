// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';



const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Banking Assignment Portal</span>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
        <div className="col-md-2 sidebar">
            <h5 className="text-center mb-4">Choose Assignment</h5>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary" onClick={() => navigate('/day1')}>First Day</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/day2')}>Second Day</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/day3')}>Third Day</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/day4')}>Fourth Day</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-10 main-content">
            <h2 className="mb-4">Welcome to the Assignment</h2>
            <p className="lead">Click any day on the left sidebar to see the Assignment componets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
