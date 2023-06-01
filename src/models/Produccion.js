const { Schema, model } = require("mongoose");

const ProduccionSchema = Schema({
  producto: {
    type: String,
    required: true,
  },
  presentacion: {
    type: String,
    required: true,
  },
  costo: {
    type: Number,
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
  lote: {
    type: String,
    required: true,
  },
});

ProduccionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Produccion", ProduccionSchema);
