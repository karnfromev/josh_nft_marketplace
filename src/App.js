import React from 'react';

// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes'
import { Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <MyRouts />
    </div>
  );
}

export default App;