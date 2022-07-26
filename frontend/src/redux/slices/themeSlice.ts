import {createSlice} from "@reduxjs/toolkit";
import {getThemeByStorage, setThemeByStorage} from "../../utils/util";

const initialState = {
  theme : 'light'
};

export const themeSlice = createSlice({
  name: 'THEME',
  initialState,
  reducers: {
    getTheme(state) {
      const theme = getThemeByStorage();
      state.theme = theme;
    },
    setTheme(state, action) {
      setThemeByStorage(action.payload);
      console.log(action.payload, 'bnbb')
      state.theme = action.payload;
    }
  }
})

export const { getTheme, setTheme } = themeSlice.actions;
