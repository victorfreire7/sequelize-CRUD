const ClientRepository = require('../model/clientsModel');

async function findAll(req, res) {
    const client = await ClientRepository.findAll();
    res.json(client);
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
    await ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function updateClient(req, res) {
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
}



module.exports = { findAll, addClient, findClient, updateClient};