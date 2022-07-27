import {createAsyncThunk} from "@reduxjs/toolkit";
import {API, errorFunc} from "./api";

export const ChatsService = {
  getChats: createAsyncThunk(
    'CHATS/getChats',
    async (arg: number, { rejectWithValue }) => {
      try {
        const { data } = await API.get(`/chat/?id=${arg}`)
        console.log(data)
        return data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  )
}
