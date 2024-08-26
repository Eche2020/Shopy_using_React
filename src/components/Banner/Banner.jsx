import React from "react";

const Banner = ({ data }) => {
	return (
		<div className="min-h-[550px] flex justify-center items-center py-12">
			<div className="container">
				<div
					style={{ backgroundColor: data.bgColor }}
					className="grid items-center grid-cols-1 gap-6 text-white md:grid-cols-3 rounded-3xl">
					{/* first col */}
					<div className="p-6 sm:p-8">
						<p data-aos="slide-right" className="text-sm">
							{data.discount}
						</p>
						<h1
							data-aos="zoom-out"
							className="text-4xl font-bold uppercase lg:text-7xl">
							{data.title}
						</h1>
						<p data-aos="fade-up" className="text-sm">
							{data.date}
						</p>
					</div>

					{/* second col */}
					<div data-aos="zoom-in" className="flex items-center h-full">
						<img
							src={data.image}
							alt=""
							className="scale-125 w-[250px] md:w[340px] mx-auto drop-shadow-2xl object-cover"
						/>
					</div>

					{/* third col */}
					<div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
						<p data-aos="zoom-out" className="text-xl font-bold">
							{data.title2}
						</p>
						<p data-aos="fade-up" className="text-3xl font-bold sm:text-5xl">
							{data.title3}
						</p>
						<p data-aos="fade-up" className="text-sm leading-5 tracking-wide">
							{data.title4}
						</p>
						<div data-aos="fade-up" data-aos-offset="0">
							<button
								className="px-4 py-2 bg-white rounded-full"
								style={{ color: data.bgColor }}>
								Shop Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
