import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}