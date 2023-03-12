const express = require("express");
const app = express();
const janvier = require("./janvier")
const fevrier = require("./fevrier")


// Route GET pour récupérer la liste des personnes d'un mois donné
app.get('/janvier', (req, res) => {
    res.send(janvier)
})

app.get('/janvier/:day', (req, res) => {
    const day = req.params.day;
    let persons = janvier.filter(jour => jour.day == +day)
    res.send(persons)
})

app.get('/fevrier', (req, res) => {
    res.send(fevrier)
})

app.get('/fevrier/:day', (req, res) => {
    const day = req.params.day;
    let persons = fevrier.filter(jour => jour.day == +day)
    res.send(persons)
})

app.listen(3000)