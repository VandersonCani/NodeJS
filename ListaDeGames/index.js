const express = require("express");

const app = express();

app.listen(3080, () => {
    console.log("Servidor rodando!");
})

app.get("/", (req,res) =>{
    res.send("Olá Mundo!")
})