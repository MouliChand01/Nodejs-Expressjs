var express = require('express');
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello World Welcome to ExpressJs</h1>')
})

const product = [
    {
        id: 1,
        name: "iPhone"
    },
    {
        id: 2,
        name: "mi Mobile"
    },
    {
        id: 3,
        name: "realMe"
    },
    {
        id: 4,
        name: "sumsang"
    }
]
app.get('/product', (req, res) => {
    res.json(product)
})

app.get('/product/:id',(req,res)=>{
   const newItem =product.filter((data)=>data.id.toString() === req.params.id);
   return res.json(newItem)
})

app.post('/addProduct',(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name)
    return res.send('posting is Done...')

})
app.listen(5000, () => {
    console.log('server runing .... !')
})