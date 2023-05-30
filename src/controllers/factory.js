const {
  MateriaPrima,
  Insumo,
  Packaging,
  Producto,
} = require("../models/index");

const materiaPrimaGet = async (req, res) => {
  const mp = await MateriaPrima.find();

  res.json({
    ok: true,
    mp,
  });
};

const materiaPrimaCreate = async (req, res) => {
  const mp = new MateriaPrima(req.body);

  try {
    const mpGuardado = await mp.save();

    res.json({
      ok: true,
      mp: mpGuardado,
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

    const mpActualizado = await MateriaPrima.findByIdAndUpdate(mpId, newMp, {
      new: true,
    });

    res.json({
      ok: true,
      evento: mpActualizado,
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

    await Evento.findByIdAndDelete(mpId);

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

  res.json({
    ok: true,
    insumos,
  });
};

const insumoCreate = async (req, res) => {
  const insumo = new Insumo(req.body);

  try {
    const insumoGuardado = await insumo.save();

    res.json({
      ok: true,
      mp: insumoGuardado,
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

    if (!mp) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    const newMp = {
      ...req.body,
    };

    const mpActualizado = await MateriaPrima.findByIdAndUpdate(mpId, newMp, {
      new: true,
    });

    res.json({
      ok: true,
      evento: mpActualizado,
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
    const insumo = await MateriaPrima.findById(insumoId);

    if (!insumo) {
      return res.status(404).json({
        ok: false,
        msg: "No existe por ese id",
      });
    }

    await Evento.findByIdAndDelete(insumo);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const packagingCreate = async (req, res) => {
  const pack = new Packaging(req.body);

  try {
    const packGuardado = await pack.save();

    res.json({
      ok: true,
      mp: packGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const productoCreate = async (req, res) => {
  const prod = new Producto(req.body);

  try {
    const prodGuardado = await prod.save();

    res.json({
      ok: true,
      mp: prodGuardado,
    });
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
  packagingCreate,
  productoCreate,
};
