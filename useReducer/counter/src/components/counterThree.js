import {useReducer} from 'react';

export default function CounterThree(){

    const initialState = 0;
    const initialState2 = 2;
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
    const [count2, dispatch2] = useReducer(reducer, initialState2)

    return(
        <div>
            <p>Count - {count}</p>
            <button type="button" onClick={() => dispatch("increment")}>Increment</button>
            <button type="button" onClick={() => dispatch("decrement")}>Decrement</button>
            <br></br>
            <p>Count - {count2}</p>
            <button type="button" onClick={() => dispatch2("increment")}>Increment</button>
            <button type="button" onClick={() => dispatch2("decrement")}>Decrement</button>
        </div>
    )
}