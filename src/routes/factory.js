const { Router } = require("express");
const {
  materiaPrimaCreate,
  materiaPrimaGet,
  materiaPrimaDelete,
  materiaPrimaUp,
  insumoCreate,
  packagingCreate,
  productoCreate,
} = require("../controllers/factory");

const router = Router();

router.get("/mp", materiaPrimaGet);
router.post("/mp", materiaPrimaCreate);
router.put("/mp/:id", materiaPrimaUp);
router.delete("/mp/:id", materiaPrimaDelete);

router.get("/insumo",insumoGet);
router.post("/insumo", insumoCreate);
router.put("/insumo/:id", insumoUp);
router.delete("/insumo/:id", insumoDelete);

router.get("/packaging",packagingGet);
router.post("/packaging", packagingCreate);
router.put("/packaging/:id", packagingUp);
router.delete("/packaging/:id", packagingDelete);

router.get("/producto",productoGet);
router.post("/producto", productoCreate);
router.put("/producto/:id", productoUp);
router.delete("/producto/:id", productoDelete);


module.exports = router;
