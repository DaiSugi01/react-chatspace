import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [id, setId] = useState();

  return (
    <>
      <div>{id}</div>
      <Login onIdSubmit={setId}/>
    </>
  )
}

export default App;
