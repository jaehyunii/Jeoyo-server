module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        userEmail: {
          type: DataTypes.STRING(45),
          allowNull: false,
          Unique: true
        },
        userName: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
        password: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
      },
      //timestamps는 생성일과 수정일, paranoid는 삭제일(복구용)입니다
      // charset과 collate를 다음과 같이 해야 한글이 깨지지 않습니다.
      { timestamps: true, paranoid: true, charset: 'utf8', collate: 'utf8_general_ci' }
    );
  };