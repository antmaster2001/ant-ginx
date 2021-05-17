import React from "react";

import InstanceCard from "../Children/InstanceCardComponents";
import LocalInstanceData from "../../../assets/instances.json";

const InstanceDisplay = () => {

	return (
		<div className="container mx-auto mt-20 ">
			<h1>Local nginx instances</h1>
			<div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-scroll">
				{LocalInstanceData.instances.map((item: any) => (
					<InstanceCard cardData={item} />
				))}
			</div>
		</div>
	);
}

export default InstanceDisplay;