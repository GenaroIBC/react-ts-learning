import { UsersApiResponse } from "types";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

export function getAllUsers(): Promise<UsersApiResponse[]> {
  return fetch(USERS_API_URL).then(res => res.json());
}
