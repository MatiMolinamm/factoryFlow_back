const materiaPrimaCreate = (req, res) => {
  console.log(req.body);
  res.json({
    ok: true,
    section: "materia prima",
  });
};

const insumoCreate = (req, res) => {
  console.log(req.body);
  res.json({
    ok: true,
    section: "insumo",
  });
};
const packagingCreate = (req, res) => {
  console.log(req.body);
  res.json({
    ok: true,
    section: "packaging",
  });
};
const productoCreate = (req, res) => {
  console.log(req.body);
  res.json({
    ok: true,
    section: "producto",
  });
};

module.exports = {
  materiaPrimaCreate,
  insumoCreate,
  packagingCreate,
  productoCreate,
};
