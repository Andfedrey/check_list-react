import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { MyAppRouter } from './components/UI/appRouter/MyAppRouter';
import { MyNavbar } from './components/UI/navbar/MyNavbar';
import { AuthContext } from './context/index';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <MyNavbar />
        <MyAppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
