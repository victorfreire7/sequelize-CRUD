const express = require('express');
const client = require('./src/controller/client')

const routes = express.Router();

routes.get("/", (req, res ) => {
    res.json({ name: "victor" });
    res.json(client);
});

routes.get("/clients", client.findAll);
routes.post("/clients", client.addClient);
routes.get("/clients/:id", client.findClient);
routes.put("/clients/:id", client.updateClient);
routes.delete("/clients/:id", client.deleteClient);

module.exports = routes;