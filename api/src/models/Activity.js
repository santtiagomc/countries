const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('activity', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
        },
        difficult:{
            type: DataTypes.ENUM("1", "2", "3", "4", "5")
        },
        duration:{
            type: DataTypes.STRING
        },
        season:{
            type: DataTypes.ENUM("Summer", "Winter", "Spring", "Autumn")
        }
    });
};