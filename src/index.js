import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './componentes/Login/login';
import reportWebVitals from './reportWebVitals';
import { AuthProvider, useAuth } from './AuthContext';

// Componente para controlar a visualização com base na autenticação
function Main() {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? <App /> : <Login />;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </React.StrictMode>
  );
  
// Se você quiser começar a medir o desempenho do seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
