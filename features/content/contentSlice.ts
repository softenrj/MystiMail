import { createSlice } from "@reduxjs/toolkit";
import { error } from "console";

let isMail :string = '';
try{
    isMail = localStorage.getItem("rj-mail") || "";
}catch(err){
    console.log(err)
}

const initialState:string =  isMail || '';


export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        updateContent: (st,ac) =>{
            localStorage.setItem("rj-mail",ac.payload);
            return ac.payload;
        }
    }
})

export const {updateContent} = contentSlice.actions;
export default contentSlice.reducer;