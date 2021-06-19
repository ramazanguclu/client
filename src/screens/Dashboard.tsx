import React, { FC } from 'react';

const Dashboard: FC = () => {
  const handlePlay = () => {
    console.log('call play');
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <button onClick={handlePlay} style={{ margin: '20px 0' }}>
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
