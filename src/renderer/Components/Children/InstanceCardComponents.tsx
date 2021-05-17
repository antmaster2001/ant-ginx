import React from "react";

import DefaultImg from "../../../assets/default.png";

const InstanceCard = (params : any) => {
	const cardData = params.cardData;
	return (
		<div className="bg-darkest-grey rounded cursor-pointer p-4">
			<img src={DefaultImg} alt="" className="h-48 " />
			<div className="w-full grid justify-items-center">
				<h1 className="text-accent text-2xl">{cardData.name}</h1>
			</div>
			<button className="text-xl ring-4 ring-pink-300 pink bg-pink-500 text-accent py-2 px-3 rounded w-full my-4">Default</button>
			<button className="text-xl ring-4 ring-green-300 green bg-green-500 text-accent py-2 px-3 rounded w-full my-4">Default</button>
			<button className="text-xl ring-4 ring-blue-300 blue bg-blue-500 text-accent py-2 px-3 rounded w-full my-4">Edit</button>

		</div>
	);
}

export default InstanceCard;