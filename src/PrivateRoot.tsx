import React, { FC } from 'react';
import { useContext } from 'react';

import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { userContext } from './userContext';

interface Props {
  path: string;
}

const PrivateRoot: FC<Props> = ({ path, children }) => {
  const { user } = useContext(userContext);

  return user ? (
    <Route exact path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoot;
