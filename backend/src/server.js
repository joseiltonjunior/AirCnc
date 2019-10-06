const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@oministack-kgcvl.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = acessa o query params
// req.params = acessa o route params
// req.body = acessa o corpo da requisição

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);