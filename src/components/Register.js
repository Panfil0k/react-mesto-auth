import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Register = ({ onRegister, setIsInfoTooltipOpen, setRegisterError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password })
      .then(resetForm)
      .then(() => {
        setRegisterError(false);
        setIsInfoTooltipOpen(true);
        history.push('/sign-in')
      })
      .catch(() => {
        setRegisterError(true);
        setIsInfoTooltipOpen(true);
      })
  }

  return (
    <div className="register">
      <h3 className="register__title">Регистрация</h3>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="register__fieldset">
          <label className="register__label">
            <input className="register__item" id="email" type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email"/>
          </label>
          <label className="register__label">
            <input className="register__item" id="password" type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Пароль"/>
          </label>
        </fieldset>
        <button className="register__submit" type="submit">Зарегистрироваться</button>
      </form>
      <Link className="register__signin" to="/sign-in">Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default Register
