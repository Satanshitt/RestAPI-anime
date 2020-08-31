const express = require('express');
const app = express();

const morgan = require('morgan');

//app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/character', require('./routes/character'));

// start server
app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
})