import React, { useState } from 'react';
import './App.css';

const cars = [
    { category: "Esporte", price: "110000", model: "Golf GTI"},
    { category: "Esporte", price: "120000", model: "Camaro"},
    { category: "SUV", price: "850000", model: "HRV"},
    { category: "SUV", price: "830000", model: "T-cross"},
    { category: "Utilitário", price: "125000", model: "Hillux"},
    { category: "Utilitário", price: "900000", model: "Ranger"}
]

const line = cat => {
    const li = [];
    cars.forEach(car => {
        if (car.category.toUpperCase() === cat.toUpperCase() || cat.toUpperCase() === "") {
            li.push(
                <tr>
                    <td>{ car.category }</td>
                    <td>{ car.price }</td>
                    <td>{ car.model }</td>
                </tr>
            )
        }
    });

    return li;
}

const creatingTableCar = cat => {
    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>Category</th> <th>Price</th> <th>Model</th>
                </tr>
            </thead>
            <tbody>
                {line(cat)}
            </tbody>
        </table>
    )
}

const searchCategory = (cat, setCat) => {
    return (
        <div className="setCategory">
            <label>Write a category: </label>
            <input type="text" value={ cat } onChange={ e => setCat(e.target.value) } />
            <small>Write all name</small>
        </div>
    )
}

export default function App() {

    const [category, setCategory] = useState(() => "");
    
    return (
        <>
            <h1>Exercise with list JSON</h1>
            { creatingTableCar(category) }
            { searchCategory(category, setCategory) }
        </>
    )
}