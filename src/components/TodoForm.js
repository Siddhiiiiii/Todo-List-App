import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React,{useState,useEffect,useRef} from 'react'

export default function TodoForm(props) {
    const[input,setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id : Math.floor(Math.random()*10000),
            text : input
        });

        setInput('');
    }


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
            type = 'text'
            className='todo-input'
            name='text'
            value={input}
            placeholder='Add a todo items'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add Todo</button>
        </form>
    )
}

