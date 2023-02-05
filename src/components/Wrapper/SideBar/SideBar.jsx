// imports
import React from "react";
import clas from "./SideBar.module.css";
import logoUser from "../../../assets/img/user-avatar.png";
import edit from "../../../assets/svg/edit.svg";
import bell from "../../../assets/svg/bell.svg";
import { useSelector, useDispatch } from "react-redux";
import {
	selectItem,
	changeValue,
} from "../../../store/slices/selectItemSlice.js";
import { Link } from "react-router-dom";

// component
const SideBar = () => {
	const arrayNavigation = [
		"Projects",
		"Friends",
		"Statistics",
		"Files",
		"Settings",
	];

	const dispatch = useDispatch();
	const itemIndex = useSelector(state => state.select.itemIndex);
	const stateSideBar = useSelector(state => state.select.stateSideBar);
	const valueInput = useSelector(state => state.select.valueInput);

	return (
		<nav className={stateSideBar ? `${clas.nav} ${clas.navActive}` : clas.nav}>
			<div className={clas.profile}>
				<img
					style={{
						background: "#314EE5",
					}}
					src={logoUser}
					className={clas.imageAvatar}
					alt="logo"
				></img>
				<button className={clas.bellButton}>
					<img src={bell} className={clas.imageBell} alt="icon bell" />
				</button>
			</div>
			<ul className={clas.listNav}>
				{arrayNavigation.map((item, index) => (
					<li
						style={{
							animationDelay: `${index * 0.2}s`,
						}}
						key={index}
						className={
							itemIndex === index
								? `${clas.itemNav} ${clas.itemNavActive}`
								: clas.itemNav
						}
						onClick={() => dispatch(selectItem(index))}
					>
						<Link className={clas.itemText} to={item.toLocaleLowerCase()}>
							{item}
						</Link>
					</li>
				))}
			</ul>
			<input
				onChange={e => dispatch(changeValue(e.target.value))}
				value={valueInput}
				className={clas.inputEdit}
			/>
			<div className={clas.profileEdit}>
				<div className={clas.blockInfoProfile}>
					<p className={clas.profileName}>
						{valueInput ? valueInput : "Mike Bahgniy"}
					</p>
					<img src={edit} className={clas.buttonEditName} alt="edit"></img>
				</div>
				<button className={clas.buyPremium}>Premium</button>
			</div>
		</nav>
	);
};

export default SideBar;
