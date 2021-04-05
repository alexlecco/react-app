import React, { useRef, useContext } from 'react';

import { AppContext } from '../context/provider';

const Form = () => {
  let nameRef = useRef(null);
  let lastnameRef = useRef(null);
  const [state, setState] = useContext(AppContext);

  return (
    <div>
      <div>
        <input
          ref={nameRef}
          onChange={() =>
            setState({ ...state, name: nameRef.current.value })
          }
          type="text"
          placeholder="nombre"
        />
      </div>
      <div>
        <input
          ref={lastnameRef}
          onChange={() =>
            setState({
              ...state,
              lastname: lastnameRef.current.value,
            })
          }
          type="text"
          placeholder="apellido"
        />
      </div>
    </div>
  );
};

export default Form;
