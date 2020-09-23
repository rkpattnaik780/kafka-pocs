const passport = require("passport");
var GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  console.log(`serializeUser user: ${user}`);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(`serializeUser userId: ${id}`);
  User.findById(id).then(user => {
    done(null, user);
  });
});

function FindOrCreate(profile, done, findObject, createObject) {
  console.log(profile._json.sub);
  User.findOne(findObject).then(currentUser => {
    if (currentUser) {
      console.log("user found: " + currentUser);
      // already have this user
      done(null, currentUser);
    } else {
      // if not, create user in our db
      new User(createObject).save().then(newUser => {
        console.log("saving user");
        done(null, newUser);
      });
    }
  });
}

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("passport call back fired !!");
      // can be used to save stuffs to database
      FindOrCreate(
        profile,
        done,
        { providerId: "gi" + profile.id },
        {
          providerId: "gi" + profile.id,
          username: profile.username,
          name: profile.displayName,
          image: profile._json.avatar_url
        }
      );
    }
  )
);