const express = require('express');
const path = require('path');
const app = express();
const ws = require('ws');
const fetch = require('cross-fetch');
const http = require('http');

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))

app.use(express.static('./q-11/public'));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening on port ${port}...`));

const wss = new ws.Server({ port: 3300 });
wss.on("connection", webSock => {
    async function getScore() {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=9a070f69-58aa-447a-b950-6358a39bf75e&offset=0');
        const { data } = await response.json();
        webSock.send(JSON.stringify(data));
    }
    getScore();
    setInterval(() => {
        getScore
    }, 2000)
})