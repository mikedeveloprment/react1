// import
import React, { Fragment } from "react";
import edit from "../../../assets/svg/blue-edit.svg";
import arrowBack from "../../../assets/svg/arrow-back.svg";
import clas from "./HeaderPage.module.css";
import {
	selectStateSideBar,
	IndexItemNone,
} from "../../../store/slices/selectItemSlice";
import friend1 from "../../../assets/img/friend1.png";
import friend2 from "../../../assets/img/friend2.png";
import friend3 from "../../../assets/img/friend3.png";
import friend4 from "../../../assets/img/friend4.png";
import friend5 from "../../../assets/img/user-avatar.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const HeaderPage = ({ title = "Hello", friends }) => {
	const dispatch = useDispatch();
	// animation title array
	const reactArray = title.split("");
	return (
		<div className={clas.header}>
			<img
				onClick={() => dispatch(selectStateSideBar(-1))}
				className={clas.back}
				src={arrowBack}
				alt="arrow back"
			/>
			<p className={clas.headerTitle}>
				{reactArray.map((i, index) =>
					i === "-" ? (
						<span key={index}>&nbsp;</span>
					) : (
						<span
							key={index}
							className={clas.letterTitle}
							style={{
								animationDelay: `${index * 0.04 + 0.3}s`,
							}}
						>
							{i}
						</span>
					)
				)}
			</p>
			<span className={clas.containerEdit}>
				<img className={clas.edit} src={edit} alt="edit" />
			</span>
			{friends ? (
				<Fragment>
					<ul className={clas.friendList}>
						<li className={clas.friendItem}>
							<img
								style={{
									background: "#19AFFF",
								}}
								className={clas.friendImg}
								src={friend1}
								alt="friend"
							/>
						</li>
						<li className={clas.friendItem}>
							<img
								style={{
									background: "#40A737",
								}}
								className={clas.friendImg}
								src={friend2}
								alt="friend"
							/>
						</li>
						<li className={clas.friendItem}>
							<img
								style={{
									background: "#FF2473",
								}}
								className={clas.friendImg}
								src={friend3}
								alt="friend"
							/>
						</li>
						<li className={clas.friendItem}>
							<img
								style={{
									background: "#FFA944",
								}}
								className={clas.friendImg}
								src={friend4}
								alt="friend"
							/>
						</li>
						<li className={clas.friendItem}>
							<img
								style={{
									background: "#314EE5",
								}}
								className={clas.friendImg}
								src={friend5}
								alt="friend"
							/>
						</li>
						<li className={clas.friendItem}>
							<span className={clas.friendCount}>12</span>
						</li>
					</ul>
					<Link
						className={clas.containerPlus}
						to="/friend-download"
						onClick={() => dispatch(IndexItemNone())}
					></Link>
				</Fragment>
			) : (
				""
			)}
		</div>
	);
};

export default HeaderPage;
