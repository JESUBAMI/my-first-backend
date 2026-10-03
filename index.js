// console.log("E dey work");
// const name = "Bambam";
// console.log(`I am ${name}`);



// const express = require("express");
// const app = express();
// const port = 2138;

// app.listen(port, ()=>{
//     console.log("E dey work");
// });

// app.get(`/jesubami`, (req, res)=>{
//     res.send("I am a Backend Developer");
    
// });

const express = require("express");
const app = express();
const port = 2138;


app.get("/jesubami", (req, res)=>{
    res.send("Hello, this is my first Express route!");
});

app.listen(port,()=>{
    console.log("E dey work");
});

app.get("/about", (req, res)=>{
    res.send("My name is MOBOLAJI Bamidele Wasiu and I'm a Backend Developer")
})