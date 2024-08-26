import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
	{
		id: 1,
		name: "Home",
		link: "/#",
	},
	{
		id: 2,
		name: "Shop",
		link: "/#shop",
	},
	{
		id: 3,
		name: "About",
		link: "/#about",
	},
	{
		id: 4,
		name: "Blogs",
		link: "/#blog",
	},
];

const DropDownLinks = [
	{
		id: 1,
		name: "Trending Products",
		link: "/#",
	},
	{
		id: 2,
		name: "Best Selling",
		link: "/#",
	},
	{
		id: 3,
		name: "Top Rated",
		link: "/#",
	},
];

const Navbar = ({ handleOrderPopup }) => {
	return (
		<div className="relative z-40 duration-200 bg-white dark:bg-gray-900 dark:text-white">
			<div className="py-4">
				<div className="container flex items-center justify-between">
					{/* Logo and Links section */}
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl">
							Eshop
						</a>
						{/* Menu Items */}
						<div className="hidden lg:block">
							<ul className="flex items-center gap-4">
								{MenuLinks.map((data, index) => {
									return (
										<li key={index}>
											<a
												href={data.link}
												className="inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white">
												{data.name}
											</a>
										</li>
									);
								})}
								{/* Dropdown */}
								<li className="relative cursor-pointer group">
									<a
										href="#"
										className="flex item-center text-gray-500 gap-[2px] font-semibold dark:hover:text:white py-2">
										Quick Links
										<span className="group-hover:rotate-180 duration-300">
											<FaCaretDown />
										</span>
									</a>

									{/* Dropdown Links */}
									<div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
										<ul className="space-y-2">
											{DropDownLinks.map((data, index) => {
												return (
													<li key={index}>
														<a
															href={data.link}
															className="text-gray-500  dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md font-semibold">
															{data.name}
														</a>
													</li>
												);
											})}
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* Navbar Right section */}
					<div className="flex items-center justify-between gap-4">
						{/* Search bar section */}
						<div className="relative hidden group sm:block">
							<input type="text" placeholder="Search" className="search-bar" />

							<IoMdSearch className="absolute text-xl text-gray-600 duration-200 -translate-y-1/2 group-hover:text-primary dark:text-gray-400 top-1/2 right-3" />
						</div>

						{/* Order Button */}
						<button className="relative p-3">
							<FaCartShopping
								className="text-xl text-gray-600 dark:text-gray-400"
								onClick={handleOrderPopup}
							/>
							<div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
								4
							</div>
						</button>
						{/* Dark mode section */}
						<div>
							<DarkMode />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
