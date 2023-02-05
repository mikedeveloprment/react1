import React from "react";
import clas from "./ListFriendInfo.module.css";
import avatar1 from "../../../../../assets/img/friend1.png";
import avatar2 from "../../../../../assets/img/friend2.png";
import avatar3 from "../../../../../assets/img/user-avatar.png";
import avatar4 from "../../../../../assets/img/friend3.png";
import avatar5 from "../../../../../assets/img/friend4.png";
import axios from "axios";
import bag from "../../../../../assets/svg/bag.svg";

const ListFriendInfo = () => {
	const [friendsArray, setFriendsArray] = React.useState([]);

	React.useEffect(() => {
		axios
			.get("https://63dc3229b8e69785e493893d.mockapi.io/Friands")
			.then(json => {
				setFriendsArray(json.data);
			});
	}, []);

	const fun = i => {
		axios.delete(`https://63dc3229b8e69785e493893d.mockapi.io/Friands/${i.id}`);
		setFriendsArray(prev => prev.filter(item => item.number !== i.number));
	};
	const ar = ["#19AFFF", "#40A737", "#314EE5", "#FFA944", "#FF2473"];
	const ar2 = [avatar1, avatar2, avatar3, avatar4, avatar5];

	return (
		<ul className={clas.list}>
			{friendsArray.map((obj, i) => (
				<li
					key={i}
					className={clas.item}
					style={{
						animationDelay: `${i * 0.06 + 0.4}s`,
					}}
				>
					<img
						src={ar2[obj.avatar]}
						alt="friend"
						style={{
							background: ar[obj.color],
						}}
						className={clas.itemImg}
					/>
					<div className={clas.blockInfo}>
						<p className={clas.itemName}>{obj.name}</p>
						<span className={clas.itemNumber}>{obj.number}</span>
					</div>
					<span onClick={() => fun(obj)} className={clas.bagCont}>
						<img src={bag} alt="bag" className={clas.bag} />
					</span>
					<span className={clas.itemNumberProjects}>{obj.count}</span>
				</li>
			))}
		</ul>
	);
};

export default ListFriendInfo;
