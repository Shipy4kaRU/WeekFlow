import { createSlice } from "@reduxjs/toolkit";
import { loadingActions } from "./loadingSlice";
import { weekActions } from "./weekSlice";

const initialState = {
  username: "",
  password: "",
  gender: "",
  uid: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountData(state, action) {
      const { username, password, gender } = action.payload;
      state.username = username;
      state.password = password;
      state.gender = gender;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setUid(state, action) {
      state.uid = action.payload;
    },
  },
});

export const setLogginData = (user) => {
  return async (dispatch) => {
    dispatch(loadingActions.setLoading(true));
    const responseData = async () => {
      const response = await fetch(
        `https://weekflow-8020a-default-rtdb.firebaseio.com/users/${user}.json`
      );
      if (!response.ok) {
        throw new Error("Ошибка при извлечении данных с сервера");
      }
      return await response.json();
    };
    try {
      const data = await responseData();
      const { username, password, gender } = data.account;
      if (username && password && gender) {
        dispatch(accountActions.setAccountData({ username, password, gender }));
      } else {
        throw new Error("Недостаточно данных от сервера");
      }
      const calendar = data.calendar;
      if (calendar) {
        dispatch(weekActions.setCalendar(calendar));
      } else {
        throw new Error("Ошибка загрузки данных календаря");
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };
};

export default accountSlice.reducer;
export const accountActions = accountSlice.actions;
