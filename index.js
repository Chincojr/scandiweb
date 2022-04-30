const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')
const http = require('http')
const Product = require('./productSchema')


// bodyParser.json()

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Server Started')
//         console.log(req.method);
//         res.end();
//     }else  if (req.url === '/add-products' && req.method === 'OPTIONS' ){
//         // console.log(req.method);
//         // console.log(req);

//         var body = "";
//         req.on("data", function (chunk) {
//             body += chunk;
//             console.log(chunk);
//         });
//         console.log(body);
//     }
// })

// server.listen(port, (req, res) => {
//     console.log('server started');
// })



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

const mongodbUrl = 'mongodb+srv://David:chincojr@cluster0.0vc1h.mongodb.net/Scandiweb?retryWrites=true&w=majority'

mongoose.connect(mongodbUrl)
.then((response)=> {
    app.listen(port, (req, res) => {
        console.log("Server started");
    })
}).catch(error => {
    console.log(error);
})

app.get('/', (req, res)=> {
    res.send("Server started");
})

app.get('/add-products', async (req, res)=> {
    await Product.find()
        .then(DbProducts => {
            let response = DbProducts
            res.json(response)
        })
        .catch(err => {
            console.log(err);
        })

})                                                                                                                                    

app.post('/add-products', (req, res)=> {
    res.send("Server started");
    let addData = req.body;
    const product = new Product({
        ...addData, 
 })
    product.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })

})



