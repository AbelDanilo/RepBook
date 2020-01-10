//IMPORT
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const oride = require('method-override');
const body_P = require('body-parser');
require('dotenv').config();

//INI
const app = express();
require('./db');
//setup
app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    LayoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');


//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(body_P.urlencoded({ extended: false }));
//routes
app.use(require('./routes/index.js'));
app.use(require('./routes/notes.js'));
//middlewares
app.use(oride('_method'));
//global


//server
app.listen(app.get('port'), () => {
    console.log("Server Start in port: ", app.get('port'));
});