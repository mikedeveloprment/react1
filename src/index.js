// imports
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Wrapper from "./components/Wrapper/Wrapper";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Wrapper/Pages/PageError/ErrorPage";
import PageProjects from "./components/Wrapper/Pages/PageProjects/PageProjects";
import PageFriends from "./components/Wrapper/Pages/PageFriends/PageFriends";
import DownLoadFriend from "./components/Wrapper/Pages/DownLoadFriend/DownLoadFriend";

//route
const pageRouter = createBrowserRouter([
	{
		path: "/",
		element: <Wrapper />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <PageProjects />,
			},
			{
				path: "/projects",
				element: <PageProjects />,
			},
			{
				path: "friends",
				element: <PageFriends />,
			},
			{
				path: "friend-download",
				element: <DownLoadFriend />,
			},
		],
	},
]);

// initialization
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<RouterProvider router={pageRouter} />
	</Provider>
);
