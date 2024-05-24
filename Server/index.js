
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded

const BASE_URL = "mongodb+srv://FinalProject:finalproject123@cluster0.6ki6u86.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const cors = require('cors')
app.use(cors())

const username = "FinalProject"
const password = "finalproject123"

const Schema = mongoose.Schema;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())







const EatWellSchema = new Schema({
    title: { type: String,  require: true },
    image: { type: String,  require: true },
    price: { type: Number, require: true},

});
const EatWellModel = mongoose.model('EatWell', EatWellSchema);


app.get('/api/products', async (req, res) => {

    try {
        const getAllData = await EatWellModel.find({})
        if (getAllData.length > 0) {
            res.status(200).send({ message: "DATA SUCCESSFUl", data: getAllData })
        } else {
            res.status(204).send({ message: "data not found" })
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
})
app.get('/api/products/:id', async (req, res) => {
    // const { id } = req.params
    try {
        const getDataById = await EatWellModel.find({})
        if (getDataById) {
            res.status(200).send({ message: "DATA SUCCESSFUl", data: getDataById })
        } else {
            res.status(204).send({ message: "data not found" })
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
})
app.delete('/api/products/:id', async (req, res) => {
const {id} = req.params
    try {
        const deletedProduct = await EatWellModel.findByIdAndDelete(id)
        if (deletedProduct) {
            res.status(200).send({ message: "DATA SUCCESSFUl deleted", data: deletedProduct })
        } else {
            res.status(204).send({ message: "data not found" })
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
})
app.post('/api/products/', async (req, res) => {

 try {
    const addNewData = new EatWellModel({...req.body})
    await addNewData.save();
    res.status(201).send({message:"created new data", data: addNewData})


    
 } catch (error) {
    res.status(500).send({ message: error })

 }
})




mongoose.connect(BASE_URL)
    .then(() => {
        console.log('Connected!')

        app.listen(port, () => {
            console.log(`Example app  http://localhost:${port}`)
        })

    });