import Pago from "../models/Pago.js";
import Anp from "../models/Anp.js";
import nodemailer from "nodemailer";

export const getAll = async (req, res) => {
  try {
    const pagos = await Pago.findAll({ include: Anp });

    res.json(pagos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const pago = await Pago.findByPk(id, { include: Anp });

    res.json(pago);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { total, cantidad_boletos, nombre_postul, id } = req.body;

    const crearPago = await Pago.create(
      {
        total,
        cantidad_boletos,
        nombre_postul,
        anps: [id],
      },
      {
        include: Anp,
      }
    );

    res.json(crearPago);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarPago = await Pago.findByPk(id);

    actualizarPago.set(req.body);

    await actualizarPago.save();

    res.json(actualizarPago);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarPago = await Pago.destroy({ where: { id } });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const sendMail = async (req, res) => {
  try {
    const { nombre, cantidad_boletos, total } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "wolfinith@gmail.com",
        pass: "ojtxpegpqcutlexy",
      },
    });

    let detalles = {
      from: "TICKET-FAST",
      to: "20191544@aloe.ulima.edu.pe",
      subject: "Detalles de pago",
      html: `
      <div style="width: 100%; background: url(https://www.peru.travel/Contenido/Atractivo/Imagen/es/59/1.1/Principal/parque-manu.jpg);background-repeat: no-repeat;background-size: cover; padding: 5rem 0; font-family: 'Segoe UI',sans-serif">
      <div style="max-width: 600px; background-color: white; margin: 0 auto; border-radius:10px">
        <div style="width: 100%; background-color: #a6bb90; padding: 20px 0; border-radius:10px 10px 0 0">
          <h1 style="color:white; text-align:center; font-size:2.5rem">TICKET-FAST</h1>
        </div>
        <div style="width: 100%; padding:15px 15px 25px 15px">
          <h2 style= "text-align:center;margin-bottom:2rem">DETALLES DE PAGO</h2>
          <div style="margin: 0 30px;font-size:1.15rem">
            <p>ANP: <b>${nombre}</b></p>
            <p>Boletos: <b>${cantidad_boletos}</b></p>
            <p>Total: <b>S/. ${total}</b></p>
          </div>
          <small>*Recuerda que debes cumplir con todas las reglas del Area Natural Protegida</small>
        </div>
      </div>
    </div>
      `,
    };

    const mailOptions = transporter.sendMail(detalles, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    });

    res.json(mailOptions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
