import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {API, errorFunc} from "./api";

export type loginData = {
    email: string,
    password: string
}

export type signUpData = loginData & {
    userName: string
}



export const AuthService = {
    signIn: createAsyncThunk(
        'AUTH/signIn',
        async (arg: loginData, { rejectWithValue }) => {
            try {
                const { email, password } = arg;
                const { data } = await API.post('/auth/signin', {
                    "email": email,
                    "password": password
                })
                return data;
            } catch (error) {
                return rejectWithValue(errorFunc(error))
            }
        }
    ),
    signUp: createAsyncThunk(
        'AUTH/signUp',
        async (arg: signUpData, { rejectWithValue }) => {
            try {
                // const { userId, password, pass } = arg;
                const { data } = await API.post('/auth/signup', { ...arg })
                return data;
            } catch (error) {
                return rejectWithValue(errorFunc(error))
            }
        }
    )
}


