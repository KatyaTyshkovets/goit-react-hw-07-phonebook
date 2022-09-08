import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: "",
    },
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },
        remove(state, action) {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        },
        setFilter(state, action) {
            return { ...state, filter: action.payload };
        },
    },
});


const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

export default persistReducer(
    persistConfig,
    contactsSlice.reducer
);
export const { add, remove, setFilter } = contactsSlice.actions;


