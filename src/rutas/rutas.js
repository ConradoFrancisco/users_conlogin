const express = require('express');
const router = express.Router();
const control = require("../funcionesRutas/controles")
const app = require("../app")


router.get("/", control.listar)

router.post('/link/agregar', control.agregar)

module.exports = router;