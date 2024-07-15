import React, { useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    onChange: (selectedOption: Option) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select an option'}
            </div>
            {isOpen && (
                <div className="options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
