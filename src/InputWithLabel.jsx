import {useEffect, useRef} from 'react';
import React from 'react';
import styles from './Input.module.css';

function InputWithLabel({todoTitle, handleTitleChange, defaultValue, children}){

    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    }
    )

    return (
        <div className = {styles.InputContainer}>
        <label className = {styles.Label} htmlFor = {todoTitle}>{children}</label>
        <input className = {styles.Input} name = "title" type = "text" id = {todoTitle} value={todoTitle} onChange={handleTitleChange} ref= {inputRef} placeholder = {defaultValue}></input>
        <button className = {styles.AddButton}>Add</button>
        </div>
    )
}

export default InputWithLabel;