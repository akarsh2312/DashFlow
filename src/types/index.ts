export interface UserData {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface RootState {
  counter: {
    value: number;
  };
  user: {
    data: UserData[];
  };
  auth: {
    isAuthenticated: boolean;
    user: {
      email: string;
      name: string;
    } | null;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    email: string;
    name: string;
  } | null;
}