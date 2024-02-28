import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Articulo = db.define('Articulo', {
  
  idmarca: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Marca',
      key: 'idmarca',
    },
  },
  idmodelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Modelo',
      key: 'idmodelo',
    },
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Articulo',
  tableName: 'articulo',
});

export default Articulo;
