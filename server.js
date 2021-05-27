// node packages //
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// file_path //
const staticPath = path.join(__dirname , "/static/");

// app middleware`s //
app.use(express.static(staticPath));

// app routes //
app.get('/' , (req , res) => {
    res.sendFile(path.join(staticPath , 'register.html'));
});

// listening to port //
app.listen(port , () => {
   console.log(`server running on port ${port}`); 
});