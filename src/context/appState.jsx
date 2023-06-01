import { createContext, useState } from "react";

export const appContext = createContext();

export function AppStateProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const appState = {
        todos: todos,
        setTodos: setTodos,
    };

    return (
        <appContext.Provider value={appState}>
            {children}
        </appContext.Provider>
    )
}
