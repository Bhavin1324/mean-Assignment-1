let fetch = require('node-fetch');
const fetchData = async () => {
    let response = await fetch('https://www.google.com/')
    let data = await response.text();
    console.log(data);
}
fetchData();