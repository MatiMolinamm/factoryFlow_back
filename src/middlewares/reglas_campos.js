const { body } = require("express-validator");

const regla_campo = [
  body("nombre")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .isLength({ max: 100 })
    .withMessage("Maximo 100 caracteres")
    .isLength({ min: 3 })
    .withMessage("Debe tener más de 3 caracteres"),
  body("presentacion")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .isLength({ max: 100 })
    .withMessage("Maximo 100 caracteres")
    .isLength({ min: 3 })
    .withMessage("Debe tener más de 3 caracteres"),
  body("costo")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .bail()
    .isNumeric()
    .withMessage("Debe ingresar números")
    .isInt()
    .withMessage("Debe ingresar números enteros"),
  body("proveedor")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .isLength({ max: 100 })
    .withMessage("Maximo 100 caracteres")
    .isLength({ min: 3 })
    .withMessage("Debe tener más de 3 caracteres"),
  body("categoria")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .isLength({ max: 100 })
    .withMessage("Maximo 100 caracteres")
    .isLength({ min: 3 })
    .withMessage("Debe tener más de 3 caracteres"),
  body("cantidad")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .bail()
    .isNumeric()
    .withMessage("Debe ingresar números")
    .isInt()
    .withMessage("Debe ingresar números enteros"),
 /* body("lote")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .isLength({ max: 100 })
    .withMessage("Maximo 100 caracteres")
    .isLength({ min: 3 })
    .withMessage("Debe tener más de 3 caracteres"),
    
    */
];

module.exports = regla_campo;
