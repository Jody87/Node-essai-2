const express = require("express");
const app = express();
const janvier = require("./janvier")
const fevrier = require("./fevrier")
const mars = require("./mars")
const avril = require("./avril")
const mai = require("./mai")
const juin = require("./juin")
const juillet = require("./juillet")
const aout = require("./aout")
const septembre = require("./septembre")
const octobre = require("./octobre")
const novembre = require("./novembre")
const decembre = require("./decembre")

// Route GET pour récupérer la liste des personnes d'un mois donné

//mois de Janvier
app.get('/janvier', (req, res) => {
    res.send(janvier)
})

app.get('/janvier/:day', (req, res) => {
    const day = req.params.day;
    let persons = janvier.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Fevrier
app.get('/fevrier', (req, res) => {
    res.send(fevrier)
})

app.get('/fevrier/:day', (req, res) => {
    const day = req.params.day;
    let persons = fevrier.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Mars
app.get('/mars', (req, res) => {
    res.send(mars)
})

app.get('/mars/:day', (req, res) => {
    const day = req.params.day;
    let persons = mars.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de avril
app.get('/avril', (req, res) => {
    res.send(avril)
})

app.get('/avril/:day', (req, res) => {
    const day = req.params.day;
    let persons = avril.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Mai
app.get('/mai', (req, res) => {
    res.send(mai)
})

app.get('/mai/:day', (req, res) => {
    const day = req.params.day;
    let persons = mai.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Juin
app.get('/juin', (req, res) => {
    res.send(juin)
})

app.get('/juin/:day', (req, res) => {
    const day = req.params.day;
    let persons = juin.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Juillet
app.get('/juillet', (req, res) => {
    res.send(juillet)
})

app.get('/juillet/:day', (req, res) => {
    const day = req.params.day;
    let persons = juillet.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Aout
app.get('/aout', (req, res) => {
    res.send(aout)
})

app.get('/aout/:day', (req, res) => {
    const day = req.params.day;
    let persons = aout.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Septembre
app.get('/septembre', (req, res) => {
    res.send(septembre)
})

app.get('/septembre/:day', (req, res) => {
    const day = req.params.day;
    let persons = septembre.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Octobre
app.get('/octobre', (req, res) => {
    res.send(octobre)
})

app.get('/octobre/:day', (req, res) => {
    const day = req.params.day;
    let persons = octobre.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Novembre
app.get('/novembre', (req, res) => {
    res.send(novembre)
})

app.get('/novembre/:day', (req, res) => {
    const day = req.params.day;
    let persons = novembre.filter(jour => jour.day == +day)
    res.send(persons)
})

//mois de Decembre
app.get('/decembre', (req, res) => {
    res.send(decembre)
})

app.get('/decembre/:day', (req, res) => {
    const day = req.params.day;
    let persons = decembre.filter(jour => jour.day == +day)
    res.send(persons)
})

app.listen(3000)