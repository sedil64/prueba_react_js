import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './bootstrap/NavigationBar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Sueldo from './pages/Sueldo';
import Bono from './pages/Bono';
import Registro from './pages/Registro';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/sueldo" element={<Sueldo />} />
        <Route path="/bono" element={<Bono />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
