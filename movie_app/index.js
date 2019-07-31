
let express = require('express');
//let app = express();
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


let mongoose = require('mongoose');
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/moviesdb', { useNewUrlParser: true });
var db = mongoose.connection;

if (!db)
    console.log("error connecting db")
else
    console.log("db connected")

let port = process.env.port || 8000;





//import express dependancy
//let express = require('express');
//let apiRoutes = require('./api-routes');

//create an instance of the dependancies
//let app = express();
//let port = 8000;

app.get('/', (req, res) => {
    res.send(JSON.stringify({ message: 'hello world !' }))
});


app.use('/api', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log('server started ...');
});


