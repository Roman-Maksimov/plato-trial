import { combineReducers } from "@reduxjs/toolkit";

import tasksSlice, { ITasksState } from "./tasksSlice";
import usersSlice, { IUsersState } from "./usersSlice";

export interface IOnboardingState {
  users: IUsersState;
  tasks: ITasksState;
}

const reducer = combineReducers<IOnboardingState>({
  users: usersSlice.reducer,
  tasks: tasksSlice.reducer,
});

export default reducer;
