const {
  MateriaPrima,
  Insumo,
  Packaging,
  Producto,
} = require("../models/index");

const materiaPrimaGet = async (req, res) => {
  const materias_primas = await MateriaPrima.find();
  const count = materias_primas.length;

  res.json({
    ok: true,
    count,
    materias_primas,
  });
};

const materiaPrimaCreate = async (req, res) => {
  const mp = new MateriaPrima(req.body);

  try {
    const mp_guardado = await mp.save();

    res.json({
      ok: true,
      mp_guardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const materiaPrimaUp = async (req, res) => {
  const mpId = req.params.id;

  try {
    const mp = await MateriaPrima.findById(mpId);

    if (!mp) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    const newMp = {
      ...req.body,
    };

    const mp_actualizado = await MateriaPrima.findByIdAndUpdate(mpId, newMp, {
      new: true,
    });

    res.json({
      ok: true,
      mp_actualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const materiaPrimaDelete = async (req, res) => {
  const mpId = req.params.id;

  try {
    const mp = await MateriaPrima.findById(mpId);

    if (!mp) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    await MateriaPrima.findByIdAndDelete(mpId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const insumoGet = async (req, res) => {
  const insumos = await Insumo.find();
  const count = insumos.length;

  res.json({
    ok: true,
    count,
    insumos,
  });
};

const insumoCreate = async (req, res) => {
  const insumo = new Insumo(req.body);

  try {
    const insumo_guardado = await insumo.save();

    res.json({
      ok: true,
      insumo_guardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const insumoUp = async (req, res) => {
  const insumoId = req.params.id;

  try {
    const insumo = await Insumo.findById(insumoId);

    if (!insumo) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    const newInsumo = {
      ...req.body,
    };

    const insumo_actualizado = await Insumo.findByIdAndUpdate(
      insumoId,
      newInsumo,
      {
        new: true,
      }
    );

    res.json({
      ok: true,
      insumo_actualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const insumoDelete = async (req, res) => {
  const insumoId = req.params.id;

  try {
    const insumo = await Insumo.findById(insumoId);

    if (!insumo) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    await Insumo.findByIdAndDelete(insumoId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const packagingGet = async (req, res) => {
  const packaging = await Packaging.find();
  const count = packaging.length;

  res.json({
    ok: true,
    count,
    packaging,
  });
};
const packagingCreate = async (req, res) => {
  const pack = new Packaging(req.body);

  try {
    const packaging_guardado = await pack.save();

    res.json({
      ok: true,
      packaging_guardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const packagingUp = async (req, res) => {
  const packId = req.params.id;

  try {
    const pack = await Packaging.findById(packId);

    if (!pack) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    const newPack = {
      ...req.body,
    };

    const packaging_actualizado = await Packaging.findByIdAndUpdate(
      packId,
      newPack,
      {
        new: true,
      }
    );

    res.json({
      ok: true,
      packaging_actualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const packagingDelete = async (req, res) => {
  const packId = req.params.id;

  try {
    const pack = await Packaging.findById(packId);

    if (!pack) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    await Packaging.findByIdAndDelete(packId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const productoGet = async (req, res) => {
  const productos = await Producto.find();
  const count = productos.length;

  res.json({
    ok: true,
    count,
    productos,
  });
};

const productoCreate = async (req, res) => {
  const prod = new Producto(req.body);
  const lote = req.body.lote;
  try {
    const loteExistente = await Producto.findOne({ lote });
    if (loteExistente) {
      return res.status(404).json({
        ok: false,
        msg: "Ya existe ese producto",
      });
    }
    const producto_guardado = await prod.save();

    res.json({
      ok: true,
      producto_guardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const productoUp = async (req, res) => {
  const prodId = req.params.id;

  try {
    const prod = await Producto.findById(prodId);

    if (!prod) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    const newProd = {
      ...req.body,
    };

    const producto_actualizado = await Producto.findByIdAndUpdate(
      prodId,
      newProd,
      {
        new: true,
      }
    );

    res.json({
      ok: true,
      producto_actualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const productoDelete = async (req, res) => {
  const prodId = req.params.id;

  try {
    const prod = await Producto.findById(prodId);

    if (!prod) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    await Producto.findByIdAndDelete(prodId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
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
};
