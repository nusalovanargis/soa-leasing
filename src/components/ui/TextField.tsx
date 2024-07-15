import React from "react";
import styles from '../../styles/TextField.module.scss';

interface CustomInputProps {
    placeholder: string;
    type?: string;
    className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, type = 'text', className }) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            className={`${styles.input} ${className}`}
        />
    );
};

export default CustomInput;
