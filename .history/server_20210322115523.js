const express = require('express');
const dotenv = require('dotenv');

//load ENV vars
dotenv.config({ path: './config/config.env'});

const app = express();

app.get('/', (req, res) => {
res.json({
    name: 'Rose'
});
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));