import React, { useContext } from 'react';
import { AppContext } from '../context/provider';

const Dashboard = () => {
  const [state] = useContext(AppContext);

  console.log(state);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <label htmlFor="name">nombre:</label>
        <p>{state.name}</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <label htmlFor="lastname">apellido:</label>
        <p>{state.lastname}</p>
      </div>
    </div>
  );
};

export default Dashboard;
