import React, { useState } from 'react';
import './App.css';
import LoginModal from './components/general/loginModal';
import ProtectedRoute from './components/protectedRoutes';
import { BrowserRouter as Router, Route, Routes  , useLocation   } from 'react-router-dom';
import { AuthProvider} from './context/authContext';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <AppContent showModal={showModal} setShowModal={setShowModal} />
      </Router>
    </AuthProvider>
  );
};

const AppContent: React.FC<{ showModal: boolean; setShowModal: (show: boolean) => void }> = ({ showModal, setShowModal }) => {
  const location  = useLocation();
  const isDashboardRoute = location.pathname === '/dashboard';

  return (
    <div className="App">
      {!isDashboardRoute && (
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
      )}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
      </Routes>
    </div>
  );
};

export default App;
