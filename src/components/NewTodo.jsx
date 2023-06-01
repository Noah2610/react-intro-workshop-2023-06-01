import { useState } from "react";
import useAppState from "../hooks/useAppState";

export default function NewTodo() {
    const [todoText, setTodoText] = useState("");
    const { todos, setTodos } = useAppState();

    function handleInput(event) {
        setTodoText(event.target.value);
    }

    function addTodo() {
        setTodos((todos) => [...todos, todoText]);
    }

    return (
        <>
            <input type="text" placeholder="New todo..." onChange={handleInput} />
            <button onClick={addTodo}>Add Todo</button>

            {todos.join(", ")}
        </>
    );
}
