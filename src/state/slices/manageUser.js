import { createSlice } from "@reduxjs/toolkit";

export const manageUserSlice = createSlice({ 
    name: 'user',
    initialState: {
        name: "",
        city: "",
        homeCity: "",
        loggedIn: false,
        searchedCities: []
    },
    reducers: { 
        increment: (state) => {
            state.value += 1
        },
        setUsername: (state, action) => {
            state.name = action.payload

        },
        setCity: (state, action) => {
            state.city = action.payload
        },
        setLoggedState: (state, action) => {
            state.loggedIn = action.payload
        },
        setSearchedCities: (state, action) => {
            state.city = action.payload
        },
    }

});

export const { setUsername, setCity, setLoggedState } = manageUserSlice.actions;

export default manageUserSlice.reducer;