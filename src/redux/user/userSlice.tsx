import { createSlice } from "@reduxjs/toolkit";

interface UserState { token: string; }

const initialState: UserState = { token: "" }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, data) => {
            state.token = data.payload;
        },
        logout: (state) => {
            state.token = "";
        }
    }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;