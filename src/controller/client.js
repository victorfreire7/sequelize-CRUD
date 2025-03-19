const ClientRepository = require('../model/clientsModel');

async function findAll(req, res) {
    try {

        const client = await ClientRepository.findAll();
        res.json(client);
        
    } catch (error) {
        res.json(error);
    }
}

async function addClient(req, res) {
    try {

        await ClientRepository.create({
            nome:req.body.nome,
            email: req.body.email
        }).then((result) => res.json(result));

    } catch (error) {

        if(error.name === 'SequelizeUniqueConstraintError'){
            res.json('erro: email ja utilizado!');
        } else {
            res.json('erro: algo de errado ocorreu, tente novamente mais tarde!');
        }

    }
}

async function findClient(req, res) {
    try {
        
        await ClientRepository.findByPk(req.params.id).then((result) => res.json(result));

    } catch (error) {
        res.json(error)
    }
}

async function updateClient(req, res) {

    try {
        
        await ClientRepository.update(
            {
                nome: req.body.name,
                email: req.body.email
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        ClientRepository.findByPk(req.params.id).then((result) => res.json(result));

    } catch (error) {

        res.json(error);

    }
}

async function deleteClient(req, res) {
    try {

        await ClientRepository.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json('Cliente deletado com sucesso!');

    } catch (error) {

        res.json(error);

    }
}

module.exports = { findAll, addClient, findClient, updateClient, deleteClient};