const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger')

//Route Files
const bootcamps = require('./routes/bootcamps');

//load ENV vars
dotenv.config({ path: './config/config.env'});

const app = express();



app.use(logger);

//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));