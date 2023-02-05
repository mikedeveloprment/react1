import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import clas from "./BlockSelect.module.css";
import { useDispatch } from "react-redux";
import { selectItem } from "../../../../../store/slices/selectItemSlice";
import avatar1 from "../../../../../assets/img/friend1.png";
import avatar2 from "../../../../../assets/img/friend2.png";
import avatar3 from "../../../../../assets/img/user-avatar.png";
import avatar4 from "../../../../../assets/img/friend3.png";
import avatar5 from "../../../../../assets/img/friend4.png";

const BlockSelect = () => {
	const [textName, setTextName] = React.useState();
	const [textNumber, setTextNumber] = React.useState();
	const [clas1, setClas1] = React.useState(false);
	const [clas2, setClas2] = React.useState(false);
	const [letAvatar, setLetAvatar] = React.useState(2);
	const [letColor, setLetColor] = React.useState(2);
	const dispatch = useDispatch();
	const fun3 = () => {
		axios.post(
			textName || textNumber || letColor
				? `https://63dc3229b8e69785e493893d.mockapi.io/Friands`
				: "",
			{
				name: textName,
				number: textNumber,
				count: 0,
				color: letColor,
				avatar: letAvatar,
			}
		);
		dispatch(selectItem(0));
	};
	const fun = e => {
		setTextName(e.target.value);
	};
	const fun2 = e => {
		setTextNumber(e.target.value);
	};

	const fun4 = () => {
		setClas1(true);
	};
	const fun5 = () => {
		setClas1(false);
	};

	const fun6 = () => {
		setClas2(true);
	};
	const fun7 = () => {
		setClas2(false);
	};

	const fun8 = i => {
		setLetAvatar(i);
	};
	const fun9 = i => {
		setLetColor(i);
	};
	const ar = ["#19AFFF", "#40A737", "#314EE5", "#FFA944", "#FF2473"];
	return (
		<div>
			<div
				style={{
					animationDelay: "0.6s",
				}}
				className={clas.inputBlock}
			>
				<label className={clas.Label}>Name</label>
				<div
					className={
						clas1
							? `${clas.inputContainer} ${clas.inputContainerFocus}`
							: clas.inputContainer
					}
				>
					<input
						onFocus={fun4}
						onBlur={fun5}
						type={"text"}
						onChange={fun}
						className={clas.input}
					/>
				</div>
			</div>
			<div
				style={{
					animationDelay: "0.9s",
				}}
				className={clas.inputBlock}
			>
				<label className={clas.Label}>Number</label>
				<div
					className={
						clas2
							? `${clas.inputContainer} ${clas.inputContainerFocus}`
							: clas.inputContainer
					}
				>
					<input
						type={"number"}
						onFocus={fun6}
						onBlur={fun7}
						onChange={fun2}
						className={clas.input}
					/>
				</div>
			</div>
			<div
				style={{
					animationDelay: "1.2s",
				}}
				className={clas.inputBlock}
			>
				<label className={clas.Label}>Avatar</label>

				<ul className={clas.imgBlock}>
					<li
						onClick={() => fun8(0)}
						className={
							letAvatar === 0
								? `${clas.itemImg} ${clas.blockSelect}`
								: clas.itemImg
						}
					>
						<img src={avatar1} alt="" className={clas.avatar} />
					</li>
					<li
						onClick={() => fun8(1)}
						className={
							letAvatar === 1
								? `${clas.itemImg} ${clas.blockSelect}`
								: clas.itemImg
						}
					>
						<img src={avatar2} alt="" className={clas.avatar} />
					</li>
					<li
						onClick={() => fun8(2)}
						className={
							letAvatar === 2
								? `${clas.itemImg} ${clas.blockSelect}`
								: clas.itemImg
						}
					>
						<img src={avatar3} alt="" className={clas.avatar} />
					</li>
					<li
						onClick={() => fun8(3)}
						className={
							letAvatar === 3
								? `${clas.itemImg} ${clas.blockSelect}`
								: clas.itemImg
						}
					>
						<img src={avatar4} alt="" className={clas.avatar} />
					</li>
					<li
						onClick={() => fun8(4)}
						className={
							letAvatar === 4
								? `${clas.itemImg} ${clas.blockSelect}`
								: clas.itemImg
						}
					>
						<img src={avatar5} alt="" className={clas.avatar} />
					</li>
				</ul>
			</div>
			<div
				style={{
					animationDelay: "1.5s",
				}}
				className={clas.inputBlock}
			>
				<label className={clas.Label}>Color</label>
				<ul className={clas.imgBlock}>
					{ar.map((item, i) => (
						<li
							key={i}
							onClick={() => fun9(i)}
							style={{
								background: item,
							}}
							className={
								letColor === i
									? `${clas.itemColor} ${clas.blockSelect}`
									: clas.itemColor
							}
						></li>
					))}
				</ul>
			</div>
			<div className={`${clas.inputContainer} ${clas.inputContainer2}`}>
				<Link to="/projects" onClick={fun3} className={clas.AddButton}>
					Add
				</Link>
			</div>
		</div>
	);
};

export default BlockSelect;
