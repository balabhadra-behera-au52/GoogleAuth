const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const GOOGLE_CLIENT_ID = "73406690876-cqvoqcrj5mrafj3upft70ea18nlpoc5a.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/google",
    },
    (accesToken, refreshToken, profile,done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user,done)=>{
      done(null,user);
});

passport.deserializeUser((user,done)=>{
     try {
        done(null,user);
     } catch (error) {
        done(error,user);
     }
})