import { getDefaultMiddleware } from "@reduxjs/toolkit";
import _ from "lodash";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";

import originStore, { IAppDispatch, IRootState } from "../src/redux/store";
import { fakeState } from "./mocks/fakeState";

export const mockStore = configureStore<IRootState, IAppDispatch>(
  getDefaultMiddleware()
);

export type IMockStore = MockStoreEnhanced<IRootState>;

export const getMockStore = (initialState: any = fakeState) =>
  mockStore(_.merge({}, originStore.getState(), initialState));
