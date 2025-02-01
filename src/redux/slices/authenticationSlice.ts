import { IAuth } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initializeState: IAuth.AuthenticationState = {
  user: null,
  error: null,
  loading: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initializeState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<IAuth.AuthenticationState["user"]>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
