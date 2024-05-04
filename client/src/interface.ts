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

export interface ISignInPayload {
  name: string;
  password: string;
}

export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface IBook {
  _id: string,
  title: string,
  abbreviation: string,
  amount: number,
  city: string,
  postedBy: {
    _id: string,
    name: string,
  }
  image: string,
  cloudinaryId: string,
  createdAt: string
}