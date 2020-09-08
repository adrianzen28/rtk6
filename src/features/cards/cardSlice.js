import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
	name: "cards",
	initialState: {
		card: {
			colors: [],
			currentColor: 0,
		},
		card2: {
			colors: ["turquoise", "mediumturquoise", "teal"],
			currentColor: 0,
		},
		card3: {
			colors: ["lightcoral", "darksalmon", "firebrick"],
			currentColor: 0,
		},
	},
	reducers: {
		addNewCard: (state, action) => {
			state[action.payload.cardName] = action.payload;
		},
		// setCardColors: (state, action) => {
		// 	state.card.colors = action.payload;
		// },
		cardNext: (state) => {
			if (state.card.currentColor === 2) {
				state.card.currentColor = 0;
			} else {
				state.card.currentColor += 1;
			}
		},
		cardPrevious: (state, action) => {
			const cardName = action.payload.toString();
			console.log(state[cardName].currentColor);
			console.log(typeof state[cardName].currentColor);
			if (state[cardName].currentColor === 0) {
				state[cardName].currentColor = 2;
			} else {
				state[cardName].currentColor -= 1;
			}
			console.log(typeof state[cardName].currentColor);
			console.log(state[cardName].currentColor);
		},
		card2Next: (state) => {
			if (state.card2.currentColor === 2) {
				state.card2.currentColor = 0;
			} else {
				state.card2.currentColor += 1;
			}
		},
		card2Previous: (state) => {
			if (state.card2.currentColor === 0) {
				state.card2.currentColor = 2;
			} else {
				state.card2.currentColor -= 1;
			}
		},
		card3Next: (state) => {
			if (state.card3.currentColor === 2) {
				state.card3.currentColor = 0;
			} else {
				state.card3.currentColor += 1;
			}
		},
		card3Previous: (state) => {
			if (state.card3.currentColor === 0) {
				state.card3.currentColor = 2;
			} else {
				state.card3.currentColor -= 1;
			}
		},
	},
});

export const {
	// setCardColors,
	addNewCard,
	cardNext,
	cardPrevious,
	card2Next,
	card2Previous,
	card3Next,
	card3Previous,
} = cardSlice.actions;

export const getCards = (state) => {
	return state.cards;
};
export const getCardColor = (state) => {
	return state.cards.card.colors[state.cards.card.currentColor];
};
export const getCard2Color = (state) => {
	return state.cards.card2.colors[state.cards.card2.currentColor];
};
export const getCard3Color = (state) => {
	return state.cards.card3.colors[state.cards.card3.currentColor];
};

export default cardSlice.reducer;
