const express = require('express');
const mongoose = require('mongoose');
const BrandNames = require('./model')

// using app variable we initialize express
const app = express();

// we can handing json data locally it is need this is calld middle where (or) body poser
app.use(express.json);

// these mongoose to connect our mangodb database if any errors we can seconed argument for the connect method
// mongoose.connect('mongodb+srv://MouliChand:moulichand@cluster0.8lni7.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('DataBase Connected sucessfully ...!!!')).catch((err) => console.log(err))

// we can create schime then we will go for model.js file
// using post we can add the new product by using schema
// app.post('/addProduct', async (req,res)=>{
//     const {brandname} = req.body;
//     try{
//         const newData = new BrandNames({brandname});
//         await newData.save();
//         return res.json(await BrandNames.find())
//     }
//     catch(err){
//         console.log(err)
//     }

// })

app.get('/', (req, res) => {
    res.send('<h1>This is the sample application to creating Rest Api Service</h1>')
})

app.listen(9090,() => console.log("server is runing ..... !!!"))