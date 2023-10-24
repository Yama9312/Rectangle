const express = require("express");
const rectangle = require ("./rectangle.js");
const app = express();
const port = 3000

app.get("/", (req, res) => { //request and response
    res.send(`<h1>Rectangle Math</h1><p>Area of 2 x 4 rectangle is ${rectangle.area(2,4)}</p> <p> Perimeter of 2 x 4 rectangle is  ${rectangle.perimeter(2,4)} </p>`); //when a request is made this is what is sent back
    });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
     });