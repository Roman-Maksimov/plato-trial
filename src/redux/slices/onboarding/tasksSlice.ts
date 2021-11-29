import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "../../scheme/typicode";

export interface ITasksState {
  completedTasks: Record<ITodo["id"], boolean>;
}

export const initialState: ITasksState = {
  completedTasks: {},
};

export const extraActions = {};

const slice = createSlice({
  name: "onboarding/tasks",
  initialState,
  reducers: {
    setTaskCompleted: (state, action: PayloadAction<ITodo["id"]>) => {
      state.completedTasks = {
        ...state.completedTasks,
        [action.payload]: true,
      };
    },
  },
});

export const actions = {
  ...slice.actions,
  ...extraActions,
};
export const reducer = slice.reducer;

export default slice;
