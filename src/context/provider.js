import React, { useState, createContext } from 'react';

const ContextProvider = (props) => {
  const [state, setState] = useState({});

  return (
    <div>
      <AppContext.Provider value={[state, setState]}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default ContextProvider;
export const AppContext = createContext();
