import Counter from "./Counter";
import Heading from "./Heading";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import { AppStateProvider } from "../context/appState";

export default function App() {
    return (
        <AppStateProvider>
            <div>
                <Heading>Cool App</Heading>
                <Counter />

                <NewTodo />
                <TodoList />
            </div>
        </AppStateProvider>
    );
}
