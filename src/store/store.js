// imports
import { configureStore } from "@reduxjs/toolkit";
import select from "./slices/selectItemSlice";
// initialization store redux
export const store = configureStore({
	reducer: {
		select,
	},
});
