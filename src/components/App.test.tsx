import "@testing-library/jest-dom";
import "../../testing/mocks/fakeState";

import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

import { getMockStore, IMockStore } from "../../testing/mockStore";
import { App } from "./App";

describe("App", () => {
  let underTest: HTMLElement;
  let store: IMockStore;

  beforeEach(() => {
    store = getMockStore();

    underTest = render(
      <Provider store={store}>
        <App />
      </Provider>
    ).container.querySelector(":scope > *") as HTMLElement;
  });

  test("should render App component", () => {
    expect(underTest).toBeInTheDocument();
  });
});
