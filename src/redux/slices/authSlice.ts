import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User{
    username : string,
    email : string,
    password : string,
    phonenumber : string,
    role:string,
    token :  string
}
interface AuthState{
    user : User | null,
    token: string | null;
}
const initialState : AuthState = {
    user : null,
    token: null,

}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>){
            state.user = action.payload;
            state.token = action.payload.token;
        },
        logout(state){
            state.user = null;
            state.token = null;
        },
    },
});
export const{ login, logout} = authSlice.actions;
export default authSlice.reducer;