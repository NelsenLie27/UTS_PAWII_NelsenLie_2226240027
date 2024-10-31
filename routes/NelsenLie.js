var express = require('express');
var router = express.Router();

const ParawisataController = require('../controller/NelsenLie');
const Parawisata = require('../model/Parawisata');

router.post('/', ParawisataController.createParawisata);

module.exports = routers;