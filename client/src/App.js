import './App.css';
import NavigationBar from './components/navigation_bar/NavigationBar';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/menu/Menu';
import Catering from './pages/catering/Catering';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Delivery from './pages/delivery/Delivery';
import Book from './pages/book/Book'

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/catering' element={<Catering />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/book' element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}