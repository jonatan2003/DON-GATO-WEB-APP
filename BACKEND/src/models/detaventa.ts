import { DataTypes } from 'sequelize';
import db from '../db/connection';

const DetalleVenta = db.define('DetalleVenta', {
 
  idventa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'DetalleVenta',
  tableName: 'detaventa',
});

export default DetalleVenta;
