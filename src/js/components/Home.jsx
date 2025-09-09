import React from "react";
import SecondsCounter from "./SecondsCounter";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({timer})=> {

	return (
		<div className="text-center">

			<SecondsCounter timer={timer}/>

					

		</div>
	);
};

export default Home;