export interface RegisterApiPayload {
  email: string;
  password: string;
  username: string;
}

export interface AuthenticationState {
  user: User | null;
  loading: boolean;
  error: string | null;
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
