const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

// tell passport to use a new Strategy for google login
passport.use(new googleStrategy({
        clientID:"610938801320-nfsppr585h7q3fdb6l0ov45f06lm2hfo.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL:"https://localhost:8000/users/auth/google/callback"

    },
    
    function(accessToken, refreshToken, profile,done){
        // find a user
        User.findOne({
            email: profile.emails[0].value}).exec(function(err,user){
                if(err){
                    console.log('ERROR in google strategy-passport', err);
                    return;
                }
                console.log(profile);
                if(user){
                    // if found set the user as req.user
                    return done(null,user);
                }
                else{
                    // if not found, create the user and set it as req.user
                    User.create({
                        name: profile.displayName,
                        email:profile.emails,
                        password:crypto.randomBytes(20).toString('hex')
                    },
                        function(err,user) {
                            if(err){
                                console.log('error in creating user google Strategy-passport',err);
                                return;
                            }
                            return done(null,user);
                        });
                    }
            
            });
        }
));

module.exports = passport;