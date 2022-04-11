const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Video = sequelize.define('video', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    video:{
        type: DataTypes.STRING,
        allowNull:false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },

    description:{
        type: DataTypes.TEXT
    },

})

module.exports = Video       