const express = require('express');
const client = require('./src/controller/client')

const routes = express.Router();

routes.get("/", (req, res ) => {
    res.json({ name: "victor" });
    res.json(client);
});

routes.get("/clients", client.findAll());

module.exports = routes;