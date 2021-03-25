const Sequelize = require('sequelize');
const path = require('path');
const user = require('./user');
const post = require('./post');
const type = require('./type');
const comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];


const sequelize = new Sequelize(config.database, config.user, config.password, { host: config.host, dialect: config.dialect });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const User = user(sequelize, Sequelize);
const Post = post(sequelize, Sequelize);
const Type = type(sequelize, Sequelize);
const Comment = comment(sequelize, Sequelize);

//작성자와 게시글
User.hasMany(Post);
Post.belongsTo(User);
//게시글과 댓글
Post.hasMany(Comment);
Comment.belongsTo(Post);
//대댓글 
Comment.hasMany(Comment, {as: 'sub_comment'});

//작성자와 댓글
User.hasMany(Comment);
Comment.belongsTo(User);
//팔로잉과 팔로워(작성자-작성자)
User.belongsToMany(User, {
  foreignKey: 'followingId',
  as: 'Followers',
  through: 'Follow',
});
User.belongsToMany(User, {
  foreignKey: 'followerId',
  as: 'Followings',
  through: 'Follow',
});
//작성자와 좋아요글 
User.belongsToMany(Post, { through: 'Like'}); 
Post.belongsToMany(User, { through: 'Like'});
//사용자와 타입답변
User.hasMany(Type);
Type.belongsTo(User);

module.exports = db;