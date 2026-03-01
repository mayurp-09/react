import "./index.css";
import { useState } from "react";

function Counter () {
    const[count, setCount] = useState(0);

    return (
        <div className="counter-container">
        <div><h2>{count}</h2></div>
        <div>
        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
        <button onClick ={() => setCount(prev => prev - 1)}>Decrease</button>
        <button onClick={ () => setCount(0)}>Reset</button>
        </div>
        </div>
    )
}
export default Counter;