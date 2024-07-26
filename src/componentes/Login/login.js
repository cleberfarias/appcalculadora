import React, { useState } from 'react';
import './login.css'; // Certifique-se de que o CSS está no mesmo diretório ou ajuste o caminho
import { useAuth } from '../../AuthContext';

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      // Senhas provisórias
      const validUsers = [
        { email: 'cleber@delgado.com', password: '123' },
        { email: 'test@test', password: '321' }
      ];
  
      // Validação
      const userIsValid = validUsers.some(
        user => user.email === email && user.password === password
      );
  
      if (userIsValid) {
        login(); // Define como autenticado
      } else {
        setError('E-mail ou senha incorretos.');
      }
    };
  
    return (
      <div className="login-container">
        <div className="login-form-container">
          <div>
            <h1 className="text-titulo">Login</h1>
            <form className="FormBox" id="loginForm" onSubmit={handleLogin}>
              <input type="hidden" value="e0e5fad7-d01e-4773-bce6-5732ddb234de" name="browser_session" id="browser_session" />
  
              <div className="FormItem">
                <label className="FormLabel" htmlFor="email">Login:</label>
                <input
                  className="FormInput"
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Digite aqui o seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
  
              <div className="FormItem">
                <label className="FormLabel" htmlFor="password">Senha:</label>
                <input
                  className="FormInput"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite aqui a sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
  
              {error && <p className="error-message">{error}</p>}
  
              <input type="hidden" value="/chats?" name="uri_request" id="uri_request" />
  
              <a className="ForgotPassword" href="/login_reset">Esqueceu sua senha? Clique aqui!</a>
              <button className="FormButton" type="submit">Acessar</button>
            </form>
          </div>
        </div>
  
        <div className="sidebar">
          <div className="sidebar-content">
            <h2 className="sidebar-title">Acompanhe suas metas</h2>
            <h3 className="sidebar-subtitle">Relatórios mensal<br />Cálculo de Comissão</h3>
            <div className="banner-container">
              <a href="https://cleberdelgado.com.br/" target="_blank" rel="noopener noreferrer" title="Clique para saber mais ">
                <img src="" alt="Imagem do desenvolvedor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;