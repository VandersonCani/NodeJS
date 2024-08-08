const express = require("express");
const app = express();
app.use(express.json());

app.listen(3080, () => {
    console.log("Servidor Rodando!")
})

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "GTAV", studio: "Rockstar", price: 30},
    {title: "Helldivers", studio: "Arrowhead", price: 200},
    {title: "RDR2", studio: "Rockstar", price: 120},
    {title: "CS GO2", studio: "Valve", price: 0}
]

app.get("/", (req,res) =>{
    res.json(games);
})

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price}
    games.push(newGame)
    res.send("OK");
});