const { Router } = require('express');
const {materiaPrimaCreate,insumoCreate,packagingCreate,productoCreate} =require('../controllers/factory')

const router = Router();

router.post('/mp',materiaPrimaCreate);
router.post('/insumo',insumoCreate);
router.post('/packaging',packagingCreate);
router.post('/producto',productoCreate);


module.exports=router;