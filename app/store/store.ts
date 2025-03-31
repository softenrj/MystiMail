import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "@/features/content/contentSlice";
import EmailReducer from "@/features/Emailchange/Slice";
import signatureReducer from "@/features/Signature/sigSlice";

export const store = configureStore({
    reducer: {
        content: contentReducer,
        email: EmailReducer,
        signature: signatureReducer
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch