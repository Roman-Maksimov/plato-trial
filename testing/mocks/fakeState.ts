import { fakeOnboarding } from "./fakeOnboarding";
import { fakeTypicodeApi } from "./fakeTypicodeApi";

export const fakeState = {
  ...fakeTypicodeApi,
  ...fakeOnboarding,
};
