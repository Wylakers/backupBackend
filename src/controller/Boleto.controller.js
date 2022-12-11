import Boleto from "../models/Boleto.js";
import Anp from "../models/Anp.js";
import Pago from "../models/Pago.js";

export const getAll = async (req, res) => {
  try {
    const boletos = await Boleto.findAll({ include: [Pago, Anp] });

    res.json(boletos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const boleto = await Boleto.findByPk(id);

    res.json(boleto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nombre_postul, anp_id, pago_id } = req.body;

    const crearBoleto = await Boleto.create({
      nombre_postul,
      anp_id,
      pago_id,
    });

    res.json(crearBoleto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarBoleto = await Boleto.findByPk(id);

    actualizarBoleto.set(req.body);

    await actualizarBoleto.save();

    res.json(actualizarBoleto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarBoleto = await Boleto.destroy({ where: { id } });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
