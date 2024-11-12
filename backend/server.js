const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Product schema with basic validation
const productSchema = new mongoose.Schema({
    tag: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    stock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

app.get('/api/products/random', async (req, res) => {
    try {
        const count = await Product.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const randomProducts = await Product.find()
            .skip(randomIndex)
            .limit(2);
        res.status(200).json(randomProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching random products', error });
    }
});

// DELETE product by ID
app.delete('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
