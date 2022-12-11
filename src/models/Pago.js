import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Pago = sequelize.define(
  "pago",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad_boletos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_postul: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Pago;
