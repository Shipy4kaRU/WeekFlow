import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { isExist: true, data: [] },
  { isExist: true, data: [] },
  { isExist: true, data: [] },
  { isExist: true, data: [] },
  { isExist: true, data: [] },
  { isExist: true, data: [] },
  { isExist: true, data: [] },
];

const weekSLice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setTask(state, action) {
      const { day, inputNumber, text, isPassed } = action.payload;
      if (!state[day]) state[day] = { isExist: true, data: [] };
      if (!state[day].data) state[day].data = [];
      if (!state[day].data[inputNumber]) {
        state[day].data[inputNumber] = { text: text, isPassed: isPassed };
      } else {
        state[day].data[inputNumber].text = text;
        state[day].data[inputNumber].isPassed = isPassed;
      }
    },
    setPassed(state, action) {
      const { day, inputNumber, isPassed } = action.payload;
      state[day].data[inputNumber].isPassed = isPassed;
    },
    setCalendar(state, action) {
      return action.payload;
    },
  },
});

export default weekSLice.reducer;
export const weekActions = weekSLice.actions;
