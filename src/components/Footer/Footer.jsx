import React from "react";
import {
	FaLocationArrow,
	FaMobile,
	FaInstagram,
	FaFacebook,
	FaLinkedin,
} from "react-icons/fa6";

const FooterLinks = [
	{
		title: "Home",
		link: "/#",
	},

	{
		title: "About",
		link: "/#",
	},
	{
		title: "Contact",
		link: "/#",
	},
	{
		title: "Blog",
		link: "/#",
	},
];

const Footer = () => {
	return (
		<div className="dark:bg-gray-950">
			<div className="container">
				<div className="grid md:grid-cols-3 pb-20 pt-5">
					{/* company details */}
					<div className="py-8 px-4">
						<a
							href="#"
							className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
							E-shop
						</a>
						<p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Reprehenderit, harum!
						</p>
						<p className="text-gray-500 mt-4">Made with 💖 from EmmyGee</p>

						<a
							href="https://github.com/Eche2020"
							target="_blank"
							className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full">
							Visit my Github for the source Code
						</a>
					</div>

					{/* Footer links */}
					<div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
						<div className="py-8 px-4">
							<h1 className="text-xl font-semibold sm:text-left mb-3">
								Important Links
							</h1>
							<ul className="space-y-3">
								{FooterLinks.map((data, index) => (
									<li key={index}>
										<a
											href={data.link}
											className="text-gray-600 hover:dark:text-white hover:text-black duration-300 dark:text-gray-400">
											{data.title}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* second cols links */}
						<div className="py-8 px-4">
							<h1 className="text-xl font-semibold sm:text-left mb-3">
								Quick Links
							</h1>
							<ul className="space-y-3">
								{FooterLinks.map((data, index) => (
									<li key={index}>
										<a
											href={data.link}
											className="text-gray-600 hover:dark:text-white hover:text-black duration-300 dark:text-gray-400">
											{data.title}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* company Address */}
						<div className="py-8 px-4 col-span-2 md:col-auto ">
							<h1 className="text-xl font-semibold sm:text-left mb-3">
								Address
							</h1>
							<div>
								<div className="flex items-center gap-3">
									<FaLocationArrow />
									<p>Ikeja , Lagos Nigeria</p>
								</div>
								<div className="flex items-center gap-3 mt-6">
									<FaMobile />
									<p> +23488872808 </p>
								</div>

								{/* social links */}
								<div className="flex items-center gap-3 mt-6">
									<a href="#">
										<FaInstagram className="font-3xl hover:text-primary duration-300" />
									</a>
									<a href="#">
										<FaFacebook className="font-3xl hover:text-primary duration-200" />
									</a>
									<a href="#">
										<FaLinkedin className="font-3xl hover:text-primary duration-200" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
