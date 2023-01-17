import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: [], loading: false, loader: false, edit: {} },
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload;
    },
    updateUser: (state, action) => {
      state.value?.map((user) => {
        if (user.id === action.payload.id) {
          user.values = action.payload.values;
        }
      });
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setloader: (state, action) => {
      state.loader = action.payload;
    },
  },
});
export const { getUsers, setloading, setloader, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
