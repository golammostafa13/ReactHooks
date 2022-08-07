import {useReducer} from 'react';

export default function Counter(){

    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1; 
            case "decrement":
                return state - 1;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <p>Count - {count}</p>
            <button type="button" onClick={() => dispatch("increment")}>Increment</button>
            <button type="button" onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    )
}