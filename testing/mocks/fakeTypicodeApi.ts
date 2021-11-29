import typicodeApi from "../../src/redux/rtk/typicodeApi";

jest.mock("../../src/redux/rtk/typicodeApi", () => {
  const module = {
    reducerPath: "typicode",
    reducer: () => null,
    useListUsersQuery: jest
      .fn()
      .mockReturnValue({ isLoading: false, isFetching: false, data: [] }),
    useGetTodosQuery: jest
      .fn()
      .mockReturnValue({ isLoading: false, isFetching: false, data: [] }),
  };

  return {
    ...module,
    default: module,
  };
});

export const mockTypicodeApi = typicodeApi as jest.Mocked<typeof typicodeApi>;

export const fakeTypicodeApi = {
  typicode: {
    queries: {
      listUsers: {
        status: "fulfilled",
        endpointName: "listUsers",
        requestId: "fake-request-id",
        startedTimeStamp: 1638124437515,
        data: [],
        fulfilledTimeStamp: 1638124437815,
      },
      getTodos: {
        status: "fulfilled",
        endpointName: "getTodos",
        requestId: "fake-request-id",
        originalArgs: 1,
        startedTimeStamp: 1638124439462,
        data: [],
        fulfilledTimeStamp: 1638124444166,
      },
    },
    mutations: {},
    provided: {},
    subscriptions: {},
    config: {
      online: true,
      focused: true,
      middlewareRegistered: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: "typicode",
    },
  },
};
