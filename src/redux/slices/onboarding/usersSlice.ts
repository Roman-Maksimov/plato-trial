import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../scheme/typicode";

export interface IUsersState {
  userId?: IUser["id"];
}

export const initialState: IUsersState = {
  userId: undefined,
};

export const extraActions = {};

const slice = createSlice({
  name: "onboarding/users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser["id"] | undefined>) => {
      state.userId = action.payload;
    },
  },
});

export const actions = {
  ...slice.actions,
  ...extraActions,
};
export const reducer = slice.reducer;

export default slice;
