const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const formDataRouter = require("./routes/formRoute");
const apiRoute = require("./routes/apiRoute");

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, './public/')))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/form-action", formDataRouter);
app.use("/api/v1/peoples", apiRoute);


app.listen(port, console.log(`Server is listening on ${port}`));