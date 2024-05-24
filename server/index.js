import express from 'express'
import mongoose from 'mongoose';
import cors from "cors"

const app = express()
const port = 3000


app.use(cors())

app.use(express.json());


const ProductSchema = new mongoose.Schema({
    img:String,
    name: String,
    title:String
});
const ProductModel = mongoose.model('product', ProductSchema);


app.get('/product', async (req, res) => {
    const product = await ProductModel.find()
    res.send(product)
})

app.get('/product/:id', async (req, res) => {
    const { id } = req.params
    const product = await ProductModel.findById(id)
    res.send(product)
})

app.post('/product', async (req, res) => {
    const { body } = req.body
    const product = new ProductModel(body)
    await product.save()
    res.send(product)
})

app.put('/product/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updateproduct = await ProductModel.findByIdAndUpdate(id, body)
    res.send(updateproduct)
})

app.delete('/product/:id', async (req, res) => {
    const { id } = req.params
    const deleteproduct = await ProductModel.findByIdAndDelete(id)
    res.send(deleteproduct)
})
mongoose.connect('mongodb+srv://nezrin:nezrin@nezrin.dtlskcs.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})