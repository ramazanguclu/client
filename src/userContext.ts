import { Dispatch, SetStateAction, createContext } from 'react';

export interface User {
  userId: number;
  currentMatch: {
    ExpiryDate: string;
  };
  userCurrentMatchInfo: {
    ExpiryDate: string;
    Score: number;
  };
}

interface UserContextProps {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const defaultParameters: UserContextProps = {
  user: undefined,
  setUser: () => undefined,
};

const userContext = createContext(defaultParameters);
const UserContextProovider = userContext.Provider;

export { userContext, UserContextProovider };
