import { createSlice } from "@reduxjs/toolkit";


const initialState:string =  'rjsharmase@gmail.com'


export const EmailSlice = createSlice({
    name: 'Emailchange',
    initialState,
    reducers: {
        updateEmail: (st,ac) =>{
            return ac.payload;
        }
    }
})

export const {updateEmail} = EmailSlice.actions;
export default EmailSlice.reducer;