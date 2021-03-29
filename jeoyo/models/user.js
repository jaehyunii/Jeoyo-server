module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name : {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: false,
        },
        email : {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password : {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: false,
        },
    }, {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
};