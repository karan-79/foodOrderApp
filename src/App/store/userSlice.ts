import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "B0C17AD9-8DD7-492B-B360-A0925574E901",
    name: "Admin",
  },
  reducers: {
    changePassword: () => {},
    changeName: () => {},
  },
});

export const userActions = userSlice.actions;

export default userSlice;
