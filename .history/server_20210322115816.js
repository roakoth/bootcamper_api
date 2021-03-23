const express = require('express');
const dotenv = require('dotenv');

//load ENV vars
dotenv.config({ path: './config/config.env'});

const app = express();

app.get('/', (req, res) => {
res.status(400).send({ success: false})
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));