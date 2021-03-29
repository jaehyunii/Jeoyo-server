const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        //제출된 input의 name과 동일해야 합니다
        // urlencoded 미들웨어가 해석한 req.body.email, req.body.password를
        // usernameField, passwordField에 연결합니다.
        usernameField: "email",
        passwordField: "password"
      },
      async (email, password, done) => {
        // done(에러, 성공, 실패)
        // 빈 값은 done(null, false) 입니다
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            // 비밀번호가 일치하면 로그인 성공 아니면 실패
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            // 이메일이 없으면 가입되지 않은 회원
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
};