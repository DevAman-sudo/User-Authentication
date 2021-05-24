const localStrategy = require("passport-local").Strategy;


function initialize(passport) {
    const authenticateUser = (email , password , done) => {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null , false , {message: 'user not found'});
        }
    };
    
    passport.use(new localStrategy({ usernameField: "email" }),
    authenticateUser);
    passport.serialize((user , done) = {});
    passport.deserialize((id , done) = {});
}