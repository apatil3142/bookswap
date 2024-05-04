export interface IUser{
  _id: string;
  name: string;
  email: string;
}

export interface IUserState {
  user: IUser | null;
  loading: boolean;
  error: boolean;
}