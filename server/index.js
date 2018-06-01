const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const cors = require('cors')

require('dotenv').config();
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());
// app.use(cors());


massive(process.env.CONNECTION_STRING).then(
    db => app.set('db', db));



app.get('/houses', controller.getAll)
app.post('/houses', controller.addProduct)
app.delete('/houses/:id', controller.deleteProduct)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Started server on port ', port);
});