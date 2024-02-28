import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Modelo = db.define('Modelo', {

  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Modelo',
  tableName: 'modelo',
});

export default Modelo;
