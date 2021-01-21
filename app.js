const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello RJ! Test 1 <br> Test 2 <h2>Amazon Web Service</h2>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
