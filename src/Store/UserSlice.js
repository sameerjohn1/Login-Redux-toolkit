import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginuser=createAsyncThunk(
    "user/loginUser",
    async(userCredentials)=>{
        const request=await axios.post("API",userCredentials)
        const response=await request.data
        localStorage.setItem("user",JSON.stringify(response))
        return response
    }
)

const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:null,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginuser.pending,(state)=>{
            state.loading=true;
            state.user=null;
            state.error=null;

        })

        .addCase(loginuser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.error=null;

        })

        .addCase(loginuser.rejected,(state,action)=>{
            state.loading=false;
            state.user=null;
            console.log(action.error.message);
            if(action.error.message==="Request failed with status code 401"){
                state.error="Access Denied! Invalid Credentials"
            }else{

                state.error=action.error.message;
            }

        })
    }
})

export default userSlice.reducer;
