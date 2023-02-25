import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
    placeholder: string;
    onChange: (value: string) => void;
}

const Input = ({placeholder, onChange}: InputProps) => {
    return (
        <div className={`${styles.input_wrapper} ${styles.label}`}>
            <input onChange={e => onChange(e.target.value)} placeholder={placeholder} className={styles.input}/>
        </div>

    );
};

export default Input;
