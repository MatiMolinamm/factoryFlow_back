const { Schema, model } = require("mongoose");

const PackagingSchema = Schema({
  nombre: {
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
  proveedor: {
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

PackagingSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Packaging", PackagingSchema);
