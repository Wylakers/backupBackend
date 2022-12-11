import Anp from "../models/Anp.js";

export const getAll = async (req, res) => {
  try {
    const anps = await Anp.findAll();

    res.json(anps);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const anp = await Anp.findByPk(id);

    res.json(anp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen } = req.body;

    const crearAnp = await Anp.create({ nombre, descripcion, precio, imagen });

    res.json(crearAnp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarAnp = await Anp.findByPk(id);

    actualizarAnp.set(req.body);

    await actualizarAnp.save();

    res.json(actualizarAnp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarAnp = await Anp.destroy({ where: { id } });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
