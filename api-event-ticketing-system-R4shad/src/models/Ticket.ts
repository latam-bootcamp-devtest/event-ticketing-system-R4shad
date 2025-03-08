import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../database/database'

export class Ticket extends Model {
  declare id: number
  declare eventId: number
  declare userId: number
}

Ticket.init(
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
    tableName: 'Tickets',
    timestamps: false,
  }
)
