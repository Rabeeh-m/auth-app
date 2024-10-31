// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     currentUser: null,
//     loading: false,
//     error: false
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         signInStart: (state) => {
//             state.loading = true
//         },
//         signInSuccess: (state, action) => {
//             state.currentUser = action.payload;
//             state.loading = false;
//             state.error = false;
//         },
//         signInFailure: (state, action) => {
//             state.loading = false;
//             state.currentUser = action.payload;
//         },

//     }
// })

// export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

// export default userSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null, // Changed to null instead of false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null; // Reset error when starting sign in
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null; // Reset error on success
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.currentUser = null; // Reset currentUser on failure
            state.error = action.payload; // Store the error message
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = false;
        },
        deleteUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
        signOut: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    }
})

export const { 
    signInStart, 
    signInSuccess, 
    signInFailure ,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signOut,
} = userSlice.actions;

export default userSlice.reducer;
