import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Brain from '../pages/Brain';
import Lungs from '../pages/Lungs';
import Muscle from '../pages/Muscle';
import Skull from '../pages/Skull';
import Stomach from '../pages/Stomach';
import Chatroom from '../pages/Chatroom';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/brain" element={<Brain />} />
                <Route path="/lungs" element={<Lungs />} />
                <Route path="/muscle" element={<Muscle />} />
                <Route path="/skull" element={<Skull />} />
                <Route path="/stomach" element={<Stomach />} />
                <Route path="/chatroom" element={<Chatroom />} />
            </Routes>
        </BrowserRouter>
    )
}
