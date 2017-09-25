import { Users, User } from "../types";

export interface AppState {
  location: string;
  users: Users[];
  user: User;

}

export const INITIAL_APP_STATE: AppState = {
  location: '',
  users: [],
  user: null
}