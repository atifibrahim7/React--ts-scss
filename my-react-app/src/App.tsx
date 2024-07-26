// src/App.tsx
import React, { useState } from 'react';
import './App.scss';
import LoginModal from './components/general/loginModal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ChitChat</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, assumenda! Aliquam, eum. Perspiciatis facere qui quae aliquid? Ducimus, est placeat? Culpa consectetur labore natus explicabo pariatur, impedit velit ut laborum! .
        </p>
        <button onClick={() => setShowModal(true)}>Login</button>
      </header>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
