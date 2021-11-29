import "@testing-library/jest-dom";
import "../../../testing/mocks/fakeState";

import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

import { mockTypicodeApi } from "../../../testing/mocks/fakeTypicodeApi";
import { getMockStore, IMockStore } from "../../../testing/mockStore";
import { Tracker } from "./Tracker";
import styles from "./Tracker.module.scss";

describe("Tracker", () => {
  let underTest: HTMLElement;
  let store: IMockStore;

  beforeEach(() => {
    store = getMockStore();

    underTest = render(
      <Provider store={store}>
        <Tracker />
      </Provider>
    ).container.querySelector(":scope > *") as HTMLElement;
  });

  afterAll(() => {
    jest.unmock("../../redux/rtk/typicodeApi");
  });

  test("should render root component", () => {
    expect(underTest).toBeInTheDocument();
    expect(underTest).toHaveClass(styles.tracker);
  });

  test("should display section title", () => {
    const title = underTest.querySelector(`:scope h1.${styles.header}`);
    expect(title).toBeInTheDocument();
    expect(title?.innerHTML).toBe("Onboarding tracker");
  });

  test("should display section container", () => {
    expect(
      underTest.querySelector(`:scope .${styles.container}`)
    ).toBeInTheDocument();
  });

  test("should display spinner during data fetching", () => {
    mockTypicodeApi.useListUsersQuery.mockReturnValueOnce({
      isLoading: true,
      isFetching: true,
      refetch: () => {},
    });

    const localTest = render(
      <Provider store={store}>
        <Tracker />
      </Provider>
    ).container.querySelector(":scope > *") as HTMLElement;

    expect(
      localTest.querySelector(`:scope .${styles.loader}`)
    ).toBeInTheDocument();
  });

  test("should display users", () => {
    const usersHeader = underTest.querySelector(
      `:scope .${styles.container} > div:first-child > h2`
    );
    expect(usersHeader).toBeInTheDocument();
    expect(usersHeader?.innerHTML).toBe("Users");
  });

  test("should display tasks", () => {
    const usersHeader = underTest.querySelector(
      `:scope .${styles.container} > div:last-child > h2`
    );
    expect(usersHeader).toBeInTheDocument();
    expect(usersHeader?.innerHTML).toBe("Tasks List");
  });
});
