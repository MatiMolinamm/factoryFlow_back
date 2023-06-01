const { Router } = require("express");
const {
  materiaPrimaCreate,
  materiaPrimaGet,
  materiaPrimaUp,
  materiaPrimaDelete,
  insumoCreate,
  insumoGet,
  insumoUp,
  insumoDelete,
  packagingCreate,
  packagingGet,
  packagingUp,
  packagingDelete,
  productoCreate,
  productoGet,
  productoUp,
  productoDelete,
} = require("../controllers/factory");
const { regla_campo,reglas_producto,validarCampos } = require("../middlewares/index");

const router = Router();

router.get("/mp", materiaPrimaGet);
router.post("/mp", [regla_campo, validarCampos], materiaPrimaCreate);
router.put("/mp/:id", [regla_campo, validarCampos], materiaPrimaUp);
router.delete("/mp/:id", materiaPrimaDelete);

router.get("/insumo", insumoGet);
router.post("/insumo", [regla_campo, validarCampos], insumoCreate);
router.put("/insumo/:id", [regla_campo, validarCampos], insumoUp);
router.delete("/insumo/:id", insumoDelete);

router.get("/packaging", packagingGet);
router.post("/packaging", [regla_campo, validarCampos], packagingCreate);
router.put("/packaging/:id", [regla_campo, validarCampos], packagingUp);
router.delete("/packaging/:id", packagingDelete);

router.get("/producto", productoGet);
router.post("/producto", [reglas_producto, validarCampos], productoCreate);
router.put("/producto/:id", [reglas_producto, validarCampos], productoUp);
router.delete("/producto/:id", productoDelete);

/*
router.get("/produccion", produtoGet);
router.post("/produccion", [regla_campo, validarCampos], productoCreate);
router.put("/produccion/:id", [regla_campo, validarCampos], productoUp);
router.delete("/produccion/:id", productoDelete);
*/

module.exports = router;
