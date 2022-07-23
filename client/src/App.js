import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/navigation_bar/NavigationBar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import Catering from "./pages/catering/Catering";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Delivery from "./pages/delivery/Delivery";
import Book from "./pages/book/Book";

export default function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		const itemInCart = cart.find((i) => i.title === item.title);
		if (itemInCart) {
			setCart([
				...cart.filter((i) => i.title !== item.title),
				{ ...item, frequency: itemInCart.frequency + 1 },
			]);
		} else {
			setCart([...cart, { ...item, frequency: 1 }]);
		}
	};

	return (
		<BrowserRouter>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu addToCart={addToCart} />} />
				<Route path="/catering" element={<Catering />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/delivery" element={<Delivery cart={cart} />} />
				<Route path="/book" element={<Book />} />
			</Routes>
		</BrowserRouter>
	);
}
