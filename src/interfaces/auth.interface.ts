import { IApp } from ".";

export interface RegisterApiPayload {
  email: string;
  password: string;
  username: string;
}

//create a login payload interface
export interface LoginApiPayload {
  identifier: string;
  password: string;
}

export interface AuthenticationState {
  user: User | null;
  loading: boolean;
  error: AppError;
  appState: IApp.AppStates;
}

export interface AppError {
  msg: string;
  type: string;
  routeTo?: string;
}
export interface User {
  id: string;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: string;
  blocked: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
