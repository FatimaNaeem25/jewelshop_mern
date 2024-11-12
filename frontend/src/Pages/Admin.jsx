import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

function Admin() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        tag: 'Necklace',
        name: '',
        description: '',
        price: '',
        image: '',
        stock: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const addProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/products', product);
            setSuccessMessage('Product added successfully!');
            console.log('Product added:', response.data);

            setProduct({
                tag: 'Necklace',
                name: '',
                description: '',
                price: '',
                image: '',
                stock: ''
            });

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);

        } catch (error) {
            console.error('Error adding product:', error);
            setErrorMessage('Failed to add product. Please try again.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    const showAllProducts = () => {
        navigate('/allproducts'); // Navigate to the all products page
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full flex flex-row justify-end mb-4 mr-8 mt-5">
                <button 
                    onClick={() => navigate('/')}
                    className="bg-orange-300 rounded-full px-4 py-2 text-maroon font-semibold hover:bg-orange-500">
                        <CiLogout className="mr-2" />
                    Client Website
                </button>
            </div>

            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">

                <button 
                    onClick={showAllProducts}
                    className="w-full mb-4 bg-orange-300 rounded-full px-6 py-3 text-maroon font-semibold hover:bg-orange-500">
                    Show all products
                </button>

                {successMessage && (
                    <div className="text-green-500 font-semibold mb-4">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="text-red-500 font-semibold mb-4">
                        {errorMessage}
                    </div>
                )}
                <form className="flex flex-col space-y-4">
                    <label htmlFor="tag" className="text-gray-700 font-medium">Product Tag:</label>
                    <select id="tag" name="tag" value={product.tag} onChange={handleInputChange} className="p-2 border rounded-md">
                        <option value="Necklace">Necklace</option>
                        <option value="Bracelet">Bracelet</option>
                        <option value="Earings">Earings</option>
                        <option value="Rings">Rings</option>
                    </select>

                    <label htmlFor="name" className="text-gray-700 font-medium">Product Name:</label>
                    <input type="text" id="name" name="name" value={product.name} placeholder="Product Name" onChange={handleInputChange} className="p-2 border rounded-md" />

                    <label htmlFor="description" className="text-gray-700 font-medium">Product Description:</label>
                    <input type="text" id="description" name="description" value={product.description} placeholder="Product Description" onChange={handleInputChange} className="p-2 border rounded-md" />

                    <label htmlFor="price" className="text-gray-700 font-medium">Product Price:</label>
                    <input type="number" id="price" name="price" value={product.price} placeholder="Product Price" onChange={handleInputChange} className="p-2 border rounded-md" />

                    <label htmlFor="image" className="text-gray-700 font-medium">Product Image URL:</label>
                    <input type="text" id="image" name="image" value={product.image} placeholder="Product Image URL" onChange={handleInputChange} className="p-2 border rounded-md" />

                    <label htmlFor="stock" className="text-gray-700 font-medium">Product Stock:</label>
                    <input type="number" id="stock" name="stock" value={product.stock} placeholder="Product Stock" onChange={handleInputChange} className="p-2 border rounded-md" />
                </form>

                <button 
                    onClick={addProduct}
                    className="w-full mt-6 bg-orange-300 rounded-full px-6 py-3 text-maroon font-semibold hover:bg-orange-500">
                    Add new product
                </button>
            </div>
        </div>
    );
}

export default Admin;
