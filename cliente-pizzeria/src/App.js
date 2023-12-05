import React, { useState } from 'react';
import {BrowserRouter,Route,Routes,} from "react-router-dom";import Login from './components/Login';

import AgregarIngrediente from './components/agregarIngrediente';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/agregarIngrediente" element={<AgregarIngrediente />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
