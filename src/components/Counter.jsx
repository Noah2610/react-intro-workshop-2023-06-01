import { useState } from "react";
import Heading from "./Heading";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    function incrementCount() {
        setCounter((counter) => counter + 1);
    }

    return (
        <div>
            <Heading>Counter!</Heading>

            <button onClick={incrementCount}>Increment count</button>

            <div>
                <strong>
                    {counter}
                </strong>
            </div>
        </div>
    );
}
