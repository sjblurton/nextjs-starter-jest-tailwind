export type Todo = { id: string; task: string; completed: boolean };

export interface User {
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  picture: {
    large: string;
  };
}

export interface UserResponse {
  results: User[];
}
