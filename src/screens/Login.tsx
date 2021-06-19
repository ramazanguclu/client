import React, { FC, useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { userContext } from '../userContext';

const Login: FC = () => {
  const history = useHistory();
  const { setUser } = useContext(userContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      const { data } = await response.json();

      setUser(data);
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
      // dummy
      setUser({
        userId: 1,
        currentMatch: {
          ExpiryDate: '2021-06-19T12:00:00',
        },
        userCurrentMatchInfo: {
          ExpiryDate: '2021-06-19T12:00:00',
          Score: 32,
        },
      });
      history.push('/dashboard');
    }
  };

  return (
    <form
      style={{
        margin: '30% auto 0',
      }}
      className="col-sm-6"
    >
      <div className="form-group">
        <input
          value={userName}
          type="text"
          className="form-control"
          id="userName"
          placeholder="Enter user name"
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={onSubmit} type="button" className="btn btn-primary btn-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
