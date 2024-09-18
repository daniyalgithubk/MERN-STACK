const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

const app = express();
require('dotenv').config();
require('./Models/db')

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)



app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
}) 