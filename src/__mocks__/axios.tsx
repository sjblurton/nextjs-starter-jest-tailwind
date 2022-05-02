import { UserResponse } from "../interface";

const mockResponse: { data: UserResponse } = {
  data: {
    results: [
      {
        name: {
          first: "John",
          last: "Smith",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/89.jpg",
        },
        login: { username: "BradPitt" },
      },
      {
        name: {
          first: "John",
          last: "Smith",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/89.jpg",
        },
        login: { username: "BradPitt" },
      },
      {
        name: {
          first: "John",
          last: "Smith",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/89.jpg",
        },
        login: { username: "BradPitt" },
      },
    ],
  },
};

const MockAxiosResponse = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default MockAxiosResponse;
