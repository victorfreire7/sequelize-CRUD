const ClientRepository = require('../model/clientsModel');

async function findAll(req, res) {
    const client = await ClientRepository.findAll();
    res.json(client);
}

module.exports = { findAll };