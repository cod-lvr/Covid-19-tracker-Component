import React, { useRef } from 'react';
import styles from './Search.module.css';

const Search = (props) => {
    const inputRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        //add  validation 

        props.onSearch(inputRef.current.value);
    }

    return (
        <form className={styles.search} onSubmit={submitHandler}>
            <input type='text' className={styles.input} ref={inputRef}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;