import React, { useState } from 'react';

const PizzaForm = ({ onAddPizza }) => {
    const [sku, setSku] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tamano, setTamano] = useState('');

    const handleSubmit = () => {
        const newPizza = {
            sku,
            nombre,
            precio: parseFloat(precio),
            tamano,
        };
        console.log(newPizza);
        setSku('');
        setNombre('');
        setPrecio('');
        setTamano('');
    };

    return (
        <div>
            <h2>Pizza Form</h2>
            <label>
                SKU:
                <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
            </label>
            <br />
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <br />
            <label>
                Precio:
                <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </label>
            <br />
            <label>
                Tamaño:
                <input type="text" value={tamano} onChange={(e) => setTamano(e.target.value)} />
            </label>
            <br />
            <button onClick={handleSubmit}>Add Pizza</button>
        </div>
    );
};

export default PizzaForm;
