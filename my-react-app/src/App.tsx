import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginModal from './components/general/loginModal';
import ProtectedRoute from './components/protectedRoutes';
import { AuthProvider } from './context/authContext';


const Home: React.FC = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page.</p>
  </div>
);

const Dashboard: React.FC = () => (
  <div>
    <h2>Dashboard</h2>
    <p>This is a protected route.</p>
  </div>
);

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>ChitChat</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              assumenda! Aliquam, eum. Perspiciatis facere qui quae aliquid?
              Ducimus, est placeat? Culpa consectetur labore natus explicabo
              pariatur, impedit velit ut laborum!
            </p>
            <button onClick={() => setShowModal(true)}>Login</button>
          </header>
          {showModal && <LoginModal onClose={() => setShowModal(false)} />}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Home />} /> */}
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
