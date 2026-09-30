import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Site from './Site.jsx';
import Admin from './pages/Admin.jsx';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  )
}