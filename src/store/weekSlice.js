import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	weeks: [
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
	],
	currentWeek: 0,
};

const weekSLice = createSlice({
	name: 'week',
	initialState,
	reducers: {
		setTask(state, action) {
			const { day, inputNumber, text, isPassed } = action.payload;
			if (!state.weeks[day]) state[day] = { isExist: true, data: [] };
			if (!state.weeks[day].data) state[day].data = [];
			if (!state.weeks[day].data[inputNumber]) {
				state.weeks[day].data[inputNumber] = { text: text, isPassed: isPassed };
			} else {
				state.weeks[day].data[inputNumber].text = text;
				state.weeks[day].data[inputNumber].isPassed = isPassed;
			}
		},
		setPassed(state, action) {
			const { day, inputNumber, isPassed } = action.payload;
			state.weeks[day].data[inputNumber].isPassed = isPassed;
		},
		setCalendar(state, action) {
			return action.payload;
		},
		nextWeek(state) {
			state.currentWeek++;
		},
		prevWeek(state) {
			state.currentWeek--;
		},
	},
});

export default weekSLice.reducer;
export const weekActions = weekSLice.actions;
