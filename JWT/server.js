/**
 * Created by pariharb on 9/12/16.
 */
var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');

var jwtSecret = 'fkdjlkjwerijlnld54fs/3uk';

var user = {
    username: 'b',
    password: 'p'
};
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(expressjwt({ secret: jwtSecret}).unless({ path: ['/login']}));

app.get('/random-user',function(req, res){
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.json(user);
});

app.get('/bp',function(req,res){
   res.json({'name':'BP'});
})

app.post('/login', authenticate, function(req,res){
    var token = jwt.sign({
        username: user.username
    },jwtSecret);
    res.send({
        token: token,
        user: user
    });
});

app.get('/me', function(req, res){
    res.send(req.user);
});

app.listen(3000,function(){
   console.log('App listening on localhost:3000');
});

//UTIL FUNCTIONS

function authenticate(req, res, next){
    var body = req.body;
    if(!body.username || !body.password){
        res.status(400).end('Must provide username or password');
    }
    if(body.username !== user.username || body.password !== user.password){
        res.status(401).end('Username or password incorrect');
    }
    next();
}