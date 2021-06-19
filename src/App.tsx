import React, { FC, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { UserContextProovider, User } from './userContext';

import Root from './Root';

const App: FC = () => {
  const [user, setUser] = useState<User>();
  return (
    <>
      <BrowserRouter>
        <UserContextProovider value={{ user, setUser }}>
          <Root />
        </UserContextProovider>
      </BrowserRouter>
    </>
  );
};

export default App;
