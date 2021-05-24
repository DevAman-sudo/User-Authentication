const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:false}));

const users = [];

app.get('/' , (req , res) => {
    res.render('index');
});

app.get('/login' , (req , res) => {
    res.render('login');
});

app.post('/login' , (req , res) => {
    
});

app.get('/register' , (req , res) => {
    res.render('register');
});

app.post('/register' , async (req , res) => {
    try {
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.redirect('/login');
    } catch {
       res.redirect('/register'); 
    }
    console.log(users);
});

app.listen(port , () => {
    console.log('app listening on port 5000');
});