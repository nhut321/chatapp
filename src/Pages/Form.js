import React, { useState, useContext } from 'react';
import './Style.css'; // Import CSS file for styling
import { MainContext } from '../Context/HomeContext'

function Form(handleLogin) {
  const [switchLogin, setSwitchLogin] = useState(true);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const homeContext = useContext(MainContext)

  const toggleForm = () => {
    setSwitchLogin(!switchLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
    homeContext.setIsLogin(true)
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted');
    // Add register logic here
  };

  return (
    <div className='form'>
      <div className="form-container">
        {switchLogin ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2>Đăng nhập</h2>
            <div className="form-group">
              <label>Username</label>
              <input placeholder='Username' type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input placeholder='Mật khẩu' type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            <p>
              Bạn không có tài khoản? <span onClick={toggleForm}>Đăng ký</span>
            </p>
          </form>
        ) : (
          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <h2>Đăng ký</h2>
            <div className="form-group">
              <label>Username</label>
              <input placeholder='Username' type="text" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input placeholder='Mật khẩu' type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
            </div>
            <button type="submit">Đăng ký</button>
            <p>
              Bạn đã có tài khoản? <span onClick={toggleForm}>Đăng nhập</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
