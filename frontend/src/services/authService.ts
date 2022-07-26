import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";

export type loginData = {
    email: string,
    password: string
}

export type signUpData = loginData & {
    userName: string
}

export const API = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: "application/json",
    },
});

const errorFunc = (error: any) => {
    if (error instanceof AxiosError && error.response) {
        if (typeof error.response.data.message !== 'undefined') {
            return error.response.data.message;
        }
        return error.response.data;
    }
    throw error;
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