const ClientRepository = require('../model/clientsModel');

async function findAll(req, res) {
    const client = await ClientRepository.findAll();
    res.json(client);
}

async function addClient(req, res) {
    await ClientRepository.create({
        nome:req.body.nome,
        email: req.body.email
    }).then((result) => res.json(result));
}

async function findClient(req, res) {
    await ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}



module.exports = { findAll, addClient, findClient };