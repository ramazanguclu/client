import React, { FC } from 'react';

import { useHistory } from 'react-router-dom';

const Main: FC = () => {
  const history = useHistory();

  const handleLoginClick = (): void => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <button onClick={handleLoginClick} style={{ margin: '20px 0' }}>
            LOGIN
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">ExpiredDate</th>
                <th scope="col">WinnerUser</th>
                <th scope="col">WinnerScore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
