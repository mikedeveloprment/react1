// imports
import React from "react";
import HeaderPage from "../../../ComponentsOfALL/PageHeader/HeaderPage";
import clas from "./ErrorPage.module.css";

// component
const ErrorPage = () => {
	return (
		<div className={clas.block} id="detail">
			<HeaderPage friends={false} title="Error-Page" />
		</div>
	);
};

export default ErrorPage;
