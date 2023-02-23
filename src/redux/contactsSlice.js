import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const deleteContactIdx = state.contacts.findIndex(contact => contact.id === action.payload.id);
      // state.contacts.splice(deleteContactIdx, 1);
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload.id);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// addContact: {
//   reducer: (state, action) => {
//     state.contacts.push(action.payload);
//   },
//   prepare: (name, number) => {
//     return {
//       payload: {
//         id: nextId(),
//         name: name,
//         number: number,
//       },
//     };
//   },
// },
// deleteContact(state, action) {
//   state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
// },
