import { AuthApis } from "@/apis";
import { IApp, IAuth } from "@/interfaces";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initializeState: IAuth.AuthenticationState = {
  user: null,
  error: {
    msg: "",
    type: "",
  },
  loading: true,
  appState: IApp.AppStates.UNAUTHENTICATED,
};

export const initUser = createAsyncThunk(
  "authentication/initUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token"); // get token from localstorage
      if (!token) {
        return thunkAPI.rejectWithValue({
          msg: "Token not found",
          type: "error",
          routeTo: IApp.AppRoutes.auth.login,
        });
      }
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await AuthApis.initUser();
      return response;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return thunkAPI.rejectWithValue({
        msg: "Internal Server Error",
        type: "global",
      });
    }
  }
);

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
    setAppState: (state, action: PayloadAction<IApp.AppStates>) => {
      state.appState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initUser.pending, (state) => {
      console.log("THUNK PENDING");
      state.loading = true;
    });
    builder.addCase(initUser.fulfilled, (state, action) => {
      console.log("THUNK FULFILLED", action.payload);
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(initUser.rejected, (state, action) => {
      console.log("THUNK REJECTED", action.payload);
      state.error = action.payload as IAuth.AppError;
      state.loading = false;
    });
  },
});

export const { setUser, setAppState } = authenticationSlice.actions;
export default authenticationSlice.reducer;
