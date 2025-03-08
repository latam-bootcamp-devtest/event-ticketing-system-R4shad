import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../database/database'

export class Event extends Model {
  declare id: number
  declare name: string
  declare date: Date
  declare availableSeats: number
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true, // Para evitar correos duplicados
    },
    availableSeats: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Events',
    timestamps: false,
  }
)
