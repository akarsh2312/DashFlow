import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../types';

interface UserState {
  data: UserData[];
}

const initialState: UserState = {
  data: JSON.parse(localStorage.getItem('userData') || '[]'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      state.data.push(action.payload);
      localStorage.setItem('userData', JSON.stringify(state.data));
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;