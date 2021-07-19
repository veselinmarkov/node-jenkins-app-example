const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
var port   = process.env.NODE_PORT || 3000;
var server = app.listen(port, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;
