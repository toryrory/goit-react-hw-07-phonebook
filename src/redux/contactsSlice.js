import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getAction = type => extraActions.map(action => action[type]);
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // const deleteContactIdx = state.contacts.findIndex(contact => contact.id === action.payload.id);
        // state.contacts.splice(deleteContactIdx, 1);
        state.contacts = state.contacts.filter(
          ({ id }) => id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...getAction('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getAction('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getAction('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});
export const contactsReducer = contactsSlice.reducer;

// {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push(action.payload);
  //   },
  //   [addContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     // const deleteContactIdx = state.contacts.findIndex(contact => contact.id === action.payload.id);
  //     // state.contacts.splice(deleteContactIdx, 1);
  //     state.contacts = state.contacts.filter(({ id }) => id !== action.payload.id);
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },