// imports
import React from "react";
import HeaderPage from "../../../ComponentsOfALL/PageHeader/HeaderPage";
import Widgets from "./Widgets/Widgets";

// component
const ContentComponent = () => {
	return (
		<main>
			<HeaderPage title="First-Projects" friends={true} />
			<Widgets />
		</main>
	);
};

export default ContentComponent;
