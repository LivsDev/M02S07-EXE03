import React, { useState } from 'react';

function ListManager() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim()) {
            setList([...list, inputValue]);
            setInputValue('');  // Limpar o input após adicionar
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddItem}>
                Adicionar
            </button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListManager;
