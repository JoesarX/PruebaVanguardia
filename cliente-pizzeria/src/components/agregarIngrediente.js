import React, { useState } from 'react';
import axios from 'axios';

const IngredientForm = () => {
    const [sku, setSku] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [fechaCompra, setFechaCompra] = useState('');
    const [precio, setPrecio] = useState('');
    const [marca, setMarca] = useState('');

    const handleSubmit = async () => {
        const newIngredient = {
            sku,
            nombre,
            cantidad: parseInt(cantidad),
            fecha_vencimiento: new Date(fechaVencimiento),
            fecha_compra: new Date(fechaCompra),
            precio: parseFloat(precio),
            marca,
        };
        console.log('Ingredient to add:')
        console.log(newIngredient)

        

        try {
            const response = await axios.post('http://localhost:8000/ingredientes', newIngredient);
            console.log(response.data);

            setSku('');
            setNombre('');
            setCantidad('');
            setFechaVencimiento('');
            setFechaCompra('');
            setPrecio('');
            setMarca('');
        } catch (error) {
            // Handle errors, log or show an alert
            console.error('Error adding ingredient:', error);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Agregar Ingrediente</h2>
                <div className="input-group">
                    <label>SKU:</label>
                    <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Cantidad:</label>
                    <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Fecha Vencimiento:</label>
                    <input type="date" value={fechaVencimiento} onChange={(e) => setFechaVencimiento(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Fecha Compra:</label>
                    <input type="date" value={fechaCompra} onChange={(e) => setFechaCompra(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Precio:</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Marca:</label>
                    <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Add Ingredient</button>
            </div>
        </div>
    );
};

export default IngredientForm;
