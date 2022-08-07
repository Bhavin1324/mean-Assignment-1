const express = require('express');
const path = require('path');
const app = express();
const helloRouter = require('./routes/getHello');

const port = process.env.PORT || 5000;

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))

app.use(express.static('./q-2/public'));

app.use("/gethello", helloRouter);
app.listen(port, console.log(`Server is listening on port ${port}...`));