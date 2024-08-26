import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

import headphones from "./assets/hero/headphone.png";
import smartphone2 from "./assets/category/smartwatch2-removebg-preview.png";

const BannerData = {
	discount: "30 % OFF",
	title: "Fine Smile",
	date: "10 Aug to 28 Jan",
	image: headphones,
	title2: "Air Solo Base",
	title3: " Winter Sale",
	title4:
		"Get your Affordable and Durable gadgets and tools and save alot of money and time also.",
	bgColor: "#f42c37",
};

const BannerData2 = {
	discount: "30% OFF",
	title: "Happy Hour",
	date: " 12 Jan to 28 Jul",
	image: smartphone2,
	title2: "Smart Solo",
	title3: "Winter Sale",
	title4:
		"Get your discount sales for affordable watches both analouge and digital at a cost efficent price",
	bgColor: "#2dcc6f",
};

const App = () => {
	const [orderPopup, setOrderPopup] = React.useState(false);

	const handleOrderPopup = () => {
		setOrderPopup(!orderPopup);
	};

	React.useEffect(() => {
		AOS.init({
			duration: 600,
			easing: "ease-in-sine",
			delay: 100,
			offset: 200,
		});
		AOS.refresh();
	}, []);

	return (
		<div className="overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
			<Navbar handleOrderPopup={handleOrderPopup} />
			<Hero handleOrderPopup={handleOrderPopup} />
			<Category />
			<Category2 />
			<Services />
			<Banner data={BannerData} />
			<Products />
			<Banner data={BannerData2} />
			<Blogs />
			<Partners />
			<Footer />
			<Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
		</div>
	);
};

export default App;
