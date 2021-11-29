import { combineReducers } from "@reduxjs/toolkit";

import typicodeApi from "./rtk/typicodeApi";
import onboarding, { IOnboardingState } from "./slices/onboarding/reducer";

export interface IState {
  [typicodeApi.reducerPath]: any;
  onboarding: IOnboardingState;
}

const reducer = combineReducers<IState>({
  [typicodeApi.reducerPath]: typicodeApi.reducer,
  onboarding,
});

export default reducer;
