const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.set('port', 3002);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(app.get('port'), () => {
    console.log('Server Reports Backend Servinte on Port 3002')
})