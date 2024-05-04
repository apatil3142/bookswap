import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../interface';

const initialState = {
  user: null,
  loading: false,
  error: false,
} satisfies IUserState as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    loginStart:(state)=>{
      state.loading=true
    },
    loginSuccess:(state,action)=>{
      state.loading=false
      state.user = action.payload
    },
    loginFailure:(state)=>{
      state.loading=false
      state.error=true
    },
    logout:(state)=>{
      state.user=null
      state.loading=false
      state.error=false
    },
  }
})

export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions

export default userSlice.reducer;