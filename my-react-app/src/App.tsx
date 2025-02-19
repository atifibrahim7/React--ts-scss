import React, { useState } from "react";
import "./App.css";
import LoginModal from "./components/general/loginModal";
import ProtectedRoute from "./components/protectedRoutes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { SocketProvider } from "./context/socketContext";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import ChatDashboard from "./pages/ChatDashboard";
// import GroupPage from "./pages/GroupPage";
// import ChatPage from "./pages/ChatPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SocketProvider>
          <Router>
            <AppContent showModal={showModal} setShowModal={setShowModal} />
          </Router>
        </SocketProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

const AppContent: React.FC<{
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}> = ({ showModal, setShowModal }) => {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="App">
      {isDashboardRoute && (
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
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path="/dashboard/groups"
          element={<ProtectedRoute component={ChatDashboard} />}
        />
        <Route
          path="/dashboard/groups/:id"
          element={<ProtectedRoute component={ChatDashboard} />}
        />
        <Route
          path="/dashboard/chat"
          element={<ProtectedRoute component={ChatDashboard} />}
        />
        <Route
          path="/dashboard/chat/:id"
          element={<ProtectedRoute component={ChatDashboard} />}
        />
      </Routes>
    </div>
  );
};

export default App;
