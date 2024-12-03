import {useEffect, useRef} from 'react';
import React from 'react';

function InputWithLabel({todoTitle, handleTitleChange, children}){

    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    }
    )

    return (
        <>
        <label htmlFor = {todoTitle}>{children}</label>
        <input name = "title" type = "text" id = {todoTitle} value={todoTitle} onChange={handleTitleChange} ref= {inputRef}></input>
        <button>Add</button>
        </>
    )
}

export default InputWithLabel;