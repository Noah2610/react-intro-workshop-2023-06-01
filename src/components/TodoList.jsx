import Heading from "./Heading";
import useAppState from "../hooks/useAppState";

export default function TodoList() {
    const { todos } = useAppState();

    return (
        <>
            <Heading>Todos</Heading>

            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo}</li>
                ))}
            </ul>
        </>
    );
}
