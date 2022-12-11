import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import Anp from "./Anp.js";
import Pago from "./Pago.js";

const Boleto = sequelize.define(
  "boleto",
  {
    nombre_postul: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "Rodrigo",
    },
  },
  {
    timestamps: false,
  }
);

//Conectar tablas
Anp.belongsToMany(Pago, { through: Boleto, foreignKey: "anp_id" });
Pago.belongsToMany(Anp, { through: Boleto, foreignKey: "pago_id" });

export default Boleto;
