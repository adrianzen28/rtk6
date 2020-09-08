import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cardsReducer from "../features/cards/cardSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		cards: cardsReducer,
	},
});
