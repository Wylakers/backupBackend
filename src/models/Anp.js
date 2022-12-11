import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Anp = sequelize.define(
  "anp",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

// await sequelize.query(`INSERT INTO anp (nombre, descripcion, precio, imagen) VALUES ('', '', '' ,)`);

// await Anp.bulkCreate([
//   {
//     nombre: "BOSQUE BERLÍN",
//     descripcion:
//       "Para conocer el ACP Bosque Berlín tiene que salir desde Bagua Grande. Vaya al paradero Alto Perú y tome los colectivos que toman la ruta Collicate, Tomocho, Vista Hermos , hasta llegar a Santa Clara. Una vez en Santa Clara, le sigue una caminata de alrededor de 90 minutos. Se adentrará en un bosque de helechos cubierto por nubes y, cuando menos se lo imagine, verá la casa de los Rimarachín. Respire y maravíllese con su natural estilo de vida.",
//     precio: 20,
//     imagen:
//       "http://www.conservamospornaturaleza.org/img/2013/03/refugio-2-1.jpg",
//   },
//   {
//     nombre: "KAKIRI UKA",
//     descripcion:
//       "Puedes acceder a Kakiri Uka por vía terrestre, desde la ciudad de Iquitos. Se toma el servicio de taxis o colectivos que hacen un recorrido aproximado de dos horas hasta la ciudad de Nauta, para luego realizar una caminata por una trocha en un tiempo estimado de 25 minutos hasta llegar al área.",
//     precio: 18,
//     imagen:
//       "https://diariolaregion.com/web/wp-content/uploads/2015/07/%C3%81rea-de-Conservaci%C3%B3n-Privada-Kakiri-Uka-es-amenazada-por-tala-ilegal-2.jpg",
//   },
//   {
//     nombre: "SABALILLO",
//     descripcion:
//       "Para llegar al Área de Conservación Privada “Sabalillo” se usa como vía principal de acceso la carretera Iquitos- Nauta, la cual es una vía de primer orden asfaltada, proyectada como una posibilidad de gran potencial en el corredor económico. Otra vía de acceso es por vía fluvial, navegando a través del Río Itaya. Esta es la segunda Área de Conservación Privada que ha sido establecida durante el presente año en el departamento de Loreto.",
//     precio: 22,
//     imagen:
//       "https://portal.andina.pe/EDPfotografia3/Thumbnail/2016/06/23/000362816W.jpg",
//   },
// ]);

export default Anp;
