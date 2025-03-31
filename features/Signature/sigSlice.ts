import { createSlice } from "@reduxjs/toolkit";


const initialState:boolean =  true


export const sigSlice = createSlice({
    name: 'signature',
    initialState,
    reducers: {
        updateSig: (st,ac) =>{
            return ac.payload;
        }
    }
})

export const {updateSig} = sigSlice.actions;
export default sigSlice.reducer;