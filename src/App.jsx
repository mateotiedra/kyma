import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu.jsx';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
