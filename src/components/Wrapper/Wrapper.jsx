// imports
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { useSelector } from "react-redux";
import clas from "./Wrapper.module.css";

// component
const Wrapper = () => {
	const statePage = useSelector(state => state.select.stateSideBar);

	return (
		<div className={clas.wrapper}>
			<SideBar />
			<div
				className={statePage ? `${clas.block} ${clas.blockActive}` : clas.block}
				id="detail"
			>
				<Outlet />
			</div>
		</div>
	);
};

export default Wrapper;
