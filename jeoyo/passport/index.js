const local = require('./localStrategy');
const { User } = require('../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    // 세션에서 고윳값을 가지고 DB에서 유저의 정보를 찾아냅니다.
    // 찾아낸 정보는 req.user에 담아줍니다
    User.findOne({ where: {id} })
        .then(user => done(null, user))
        .catch(err => done(err));
  });
  local(passport);
};