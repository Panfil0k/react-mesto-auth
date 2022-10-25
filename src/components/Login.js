import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
    setMessage('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then(resetForm)
      .then(() => history.push('/main'))
      .catch((err) => setMessage(err.message || 'Неправильное имя пользователя или пароль'));
  }

  return(
    <div className="login">
      <h3 className="login__title">Вход</h3>
      <span className="login__error">{message}</span>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="login__fieldset">
          <label className="login__label">
            <input className="login__item" id="email" type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email"/>
          </label>
          <label className="login__label">
            <input className="login__item" id="password" type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Пароль"/>
          </label>
        </fieldset>
        <button className="login__submit" type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login
