const express = require("express");
const bodyParser = require('body-parser')
const port = 3000;
const routes = require('./routes');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
    console.log("Server listening on port",port);
});
