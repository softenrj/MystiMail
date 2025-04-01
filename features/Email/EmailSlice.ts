import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Emailopt interface
interface Emailopt {
  from: string;
  to: string;
  bcc: string[];
  subject: string;
  content: string;
  AttachSignature: boolean;
}


let prevEmail: Emailopt | null = null;
if (typeof window !== 'undefined') {
  try {
    const savedEmail = localStorage.getItem("rj-email");
    prevEmail = savedEmail ? JSON.parse(savedEmail) : null;
  } catch (err) {
    console.log("Error reading from localStorage:", err);
  }
}

const initialState: Emailopt = prevEmail || {
  from: "rjsharmase@gmail.com",
  to: "",
  bcc: [],
  subject: "",
  content: "",
  AttachSignature: true,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    updateFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
      localStorage.setItem("rj-email", JSON.stringify(state));
    },
    updateTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
      localStorage.setItem("rj-email", JSON.stringify(state));
    },
    updateBcc: (state, action: PayloadAction<string[]>) => {
      state.bcc = action.payload;
      localStorage.setItem("rj-email", JSON.stringify(state));
    },
    updateSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
      localStorage.setItem("rj-email", JSON.stringify(state));
    },
    updateContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
      localStorage.setItem("rj-email", JSON.stringify(state));
    },
    updateSignature: (state, action: PayloadAction<boolean>) => {
      state.AttachSignature = action.payload;
      localStorage.setItem("rj-email", JSON.stringify(state));
    },
  },
});

// Export actions and reducer
export const {
  updateFrom,
  updateTo,
  updateBcc,
  updateSubject,
  updateContent,
  updateSignature,
} = emailSlice.actions;
export default emailSlice.reducer;
