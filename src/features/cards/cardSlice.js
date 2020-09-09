import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cardsAdapter = createEntityAdapter();

const getPreviousColor = (currentColor) => {
	let previousColor = 0;
	if (currentColor === 0) {
		previousColor = 2;
	} else {
		previousColor = currentColor - 1;
	}
	return previousColor;
};

const getNextColor = (currentColor) => {
	let nextColor = 0;
	if (currentColor === 2) {
		nextColor = 0;
	} else {
		nextColor = currentColor + 1;
	}
	return nextColor;
};

export const cardSlice = createSlice({
	name: "cards",
	initialState: cardsAdapter.getInitialState(),
	reducers: {
		cardsAddOne: cardsAdapter.addOne,
		cardsAddMany: cardsAdapter.addMany,
		cardPreviousColor: (state, action) => {
			const currentColor = action.payload.changes.currentColor;
			action.payload.changes.currentColor = getPreviousColor(currentColor);
			return cardsAdapter.updateOne(state, action);
		},
		cardNextColor: (state, action) => {
			const currentColor = action.payload.changes.currentColor;
			action.payload.changes.currentColor = getNextColor(currentColor);
			return cardsAdapter.updateOne(state, action);
		},
	},
});

const { selectById } = cardsAdapter.getSelectors((state) => state.cards);
export const selectCardEntity = (id) => {
	return (state) => selectById(state, id);
};

export const { actions } = cardSlice;

export default cardSlice.reducer;
