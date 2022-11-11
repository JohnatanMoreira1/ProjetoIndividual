var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.post("/procurar", function (req, res) {
    medidaController.selecionar(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/setuser", function (req, res) {
    medidaController.setuser(req, res);
})

module.exports = router;