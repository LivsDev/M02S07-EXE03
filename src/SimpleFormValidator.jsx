import React, { useState, useEffect } from 'react';

function SimpleFormValidator() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    const [formComplete, setFormComplete] = useState(false);

    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
        setFormComplete(allFieldsFilled);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Formulário Simples</h2>
            <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
            <input type="number" name="age" placeholder="Idade" value={formData.age} onChange={handleChange} />
            {formComplete && <p>O formulário está completamente preenchido!</p>}
        </div>

);
}

export default SimpleFormValidator;