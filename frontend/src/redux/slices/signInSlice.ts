import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthService} from "../../services/authService";

type UserData = {
    id: number,
    email: string,
    password: string,
    username: string,
    description: string,
    image: string,
    url: string,
    createdAt: string,
    updatedAt: string,
    token: string
}

export type SignInState = {
    loading: boolean,
    error: string | undefined,
    data: UserData,
}

const initialState: SignInState = {
    loading: false,
    error: '',
    data: {
        id: 0,
        email: '',
        password: '',
        username: '',
        description: '',
        image: '',
        url: '',
        createdAt: '',
        updatedAt: '',
        token: ''
    }
}

export const authSlice = createSlice({
    name: 'AUTH',
    initialState,
    reducers: {
        signOut(state) {
            removeTokenInStorage();
            state.loading = false;
            state.error = '';
            state.data = initialState.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthService.signIn.pending, (state, action) => {
                state.loading = true;
                state.error = '';
                state.data = initialState.data;
            })
            .addCase(AuthService.signIn.fulfilled, (state, action) => {
                state.loading = false;
                setTokenInStorage(action.payload)
                state.data = action.payload;
            })
            .addCase(AuthService.signIn.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload as string;
                } else {
                    // state.error = action.error.message;
                    state.error = 'error'
                }
            })
            .addCase(AuthService.signUp.pending, (state) => {
                state.loading = true;
                state.error = '';
                state.data = initialState.data;
            })
            .addCase(AuthService.signUp.fulfilled, (state, action) => {
                state.loading = false;
                setTokenInStorage(action.payload.token)
                state.data = action.payload;
            })
            .addCase(AuthService.signUp.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload as string;
                } else {
                    state.error = 'error'
                }
            })
    }
});

export const { signOut } = authSlice.actions;

const setTokenInStorage = (userData: UserData) => {
    window.localStorage.setItem('UserData', JSON.stringify(userData));
}

const removeTokenInStorage = () => {
    window.localStorage.removeItem('UserData');
}
