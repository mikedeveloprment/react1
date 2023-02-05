// imports
import { createSlice } from "@reduxjs/toolkit";

// one state slice
const initialState = {
	itemIndex: 0,
	valueInput: "",
	stateSideBar: false,
	change: 0,
};

// create slice
export const selectItemSlice = createSlice({
	name: "selectItem",
	initialState,
	reducers: {
		selectItem(state, action) {
			state.itemIndex = action.payload;
			state.stateSideBar = !state.stateSideBar;
		},
		changeValue(state, action) {
			state.valueInput = action.payload;
		},
		selectStateSideBar(state) {
			state.stateSideBar = !state.stateSideBar;
		},
		IndexItemNone(state, action) {
			state.itemIndex = action.payload;
		},
		Cha(state) {
			state.change += 1;
			console.log(state.change);
		},
	},
});

export const {
	selectItem,
	Cha,
	changeValue,
	IndexItemNone,
	selectStateSideBar,
} = selectItemSlice.actions;
export default selectItemSlice.reducer;
