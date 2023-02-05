import React from "react";
import HeaderPage from "../../../ComponentsOfALL/PageHeader/HeaderPage";
import ListFriendInfo from "./ListFriendInfo/ListFriendInfo";
const PageFriends = () => {
	return (
		<div>
			<HeaderPage title="Your-Friends" />
			<ListFriendInfo />
		</div>
	);
};

export default PageFriends;
