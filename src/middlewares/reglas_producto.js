const { body } = require("express-validator");

const regla_producto = [
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
  body("costo_kg")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .bail()
    .isNumeric()
    .withMessage("Debe ingresar números")
    .isInt()
    .withMessage("Debe ingresar números enteros"),
    body("costo_venta")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .bail()
    .isNumeric()
    .withMessage("Debe ingresar números")
    .isInt()
    .withMessage("Debe ingresar números enteros"),
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

module.exports = regla_producto;
