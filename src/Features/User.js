//reducer

import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState:{value:{name:'nbvbn', age:10, email:'mnbbnm'}},
    
    reducers:{
        login: (state,action) => {
            state.value= action.payload
        },

        logout:(state,action) => {
            state.value={name:' ', age:0, email:' '}
        }

    }
});
export const {login, logout}= userSlice.actions;
export default userSlice.reducer;