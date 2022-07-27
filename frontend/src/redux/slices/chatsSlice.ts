import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatsService} from "../../services/chatsService";
import {AuthService} from "../../services/authService";

export type chat = {
  id: number,
  title: string,
  sender: number,
  receiver: number,
  lastMessage: null | string,
  createdAt: string,
  updatedAt: string
}

export type chatsState = {
  loading: boolean,
  error: string | undefined,
  data: chat[]
};

const initialState: chatsState = {
  loading: false,
  error: '',
  data: [{
    id: 0,
    title: '',
    sender: 0,
    receiver: 0,
    lastMessage: '',
    createdAt: '',
    updatedAt: ''
  }]
}

export const chatsSlice = createSlice({
  name: 'CHAHTS',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ChatsService.getChats.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.data = initialState.data;
      })
      .addCase(ChatsService.getChats.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(ChatsService.getChats.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'error'
        }
      })
  }
})
