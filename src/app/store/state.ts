import { Users } from "../types";

export interface AppState {
  location: string;
  users: Users[];

}

export const INITIAL_APP_STATE: AppState = {
  location: '',
  users: []
}