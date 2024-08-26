import React from "react";
import Button from "../../components/Shared/Button";
const ProductCard = ({ data }) => {
	return (
		<div className="mb-10">
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 place-items-center">
				{/* card section */}
				{data.map((data) => {
					return (
						<div
							data-aos="fade-up"
							data-aos-delay={data.aosDelay}
							className="group"
							key={data.id}>
							<di className="relative">
								<img
									src={data.img}
									alt=""
									className="h-[180px] w-[260px] object-contain rounded-md"
								/>
								{/* Hover Button */}
								<div className="hidden group-hover:flex  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
									<Button
										text={"Add to cart"}
										bgColor={"bg-primary"}
										textColor={"text-white"}
									/>
								</div>
							</di>
							<div className="leading-7">
								<h2 className="font-semibold">{data.title}</h2>
								<h2 className="font-bold">${data.price} </h2>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductCard;
