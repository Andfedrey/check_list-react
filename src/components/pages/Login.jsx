import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import { MyButton } from '../UI/button/MyButton';
import { MyInput } from '../UI/input/MyInput';

export const Login = () => {
  const [user, setUser] = useState('');
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="введите логин" />
        <MyInput type="password" placeholder="введите логин" />
        <MyButton>LogIn</MyButton>
      </form>
    </div>
  );
};
