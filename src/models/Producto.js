const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  presentacion: {
    type: String,
    required: true,
  },
  costo_kg: {
    type: Number,
    required: true,
  },
  costo_venta: {
    type: Number,
    required: true,
  },
  lote: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
});

ProductoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Producto", ProductoSchema);
