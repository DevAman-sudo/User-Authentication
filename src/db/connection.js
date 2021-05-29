const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${porcess.env.CONFIG}/devdb` , {
    
}).then( () => {
    console.log('connected to DB');
});