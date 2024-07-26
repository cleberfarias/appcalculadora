import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const AuthContext = createContext();

// Fornecimento do contexto
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Inicialmente, não autenticado

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar o contexto
export function useAuth() {
    return useContext(AuthContext);
}
