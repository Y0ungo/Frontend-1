import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, matchPath } from 'react-router-dom';

import Homepage from './pages/pages.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
