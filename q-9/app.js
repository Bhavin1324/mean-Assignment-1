const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('nodejs-mysql').default;
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: "employeedb"
}
const db = mysql.getInstance(config);
app.post("/data", (req, res) => {
    const { name, designation } = req.body;
    db.connect().then(() => {
        var sql = `INSERT INTO emp (NAME,DESIG) VALUES ('${name}','${designation}')`;
        return db.exec(sql);
    }).then(res => {
        return res.json({ success: true })
    }).catch(err => {
        return res.json({ success: false })
    })

})

app.get("/data", (req, res) => {
    db.exec("SELECT * FROM emp").then(result => {
        return res.status(200).json({ data: result })
    }).catch(err => {
        return res.status(500).json({ data: null })
    })
})

app.listen(port, console.log(`Server is listening on port ${port}`));
