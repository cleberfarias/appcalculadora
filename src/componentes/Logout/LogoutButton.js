import React from 'react';
import { useAuth } from '../../AuthContext';
import './LogoutButton.css'; // Adicione um arquivo de estilo para o botão, se necessário

function LogoutButton() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); // Chama a função de logout do contexto
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Sair
        </button>
    );
}

export default LogoutButton;
