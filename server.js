var express = require('express');
var app = express();
const queryString = require('node:querystring');
var axios = require('axios');
const cors = require("cors");
var session = require('express-session')
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors()); 
app.use(express.json());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay,secure: false, },
    resave: true,           
    
}));
app.use(express.urlencoded({ extended: false })); 
app.use('/auth', require('./auth/authRouter'));

let appId = '1199653184274149';
let secr  = 'c1f878c936d02f1a03300fcbc9f76d01'
	let redUri = "https://httpstat.us/200"
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;

let fbappId = '948380433202177';
let fbsec = 'b48bba5f0b1b8a164071d17f53537249';

const stringifiedParams = queryString.stringify({
    client_id: fbappId,
    redirect_uri: redUri,
    scope: ['email', 'user_friends'].join(','), // comma seperated string
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
  });
  
  const facebookLoginUrl = `https://www.facebook.com/v16.0/dialog/oauth?${stringifiedParams}`;


  
app.get('/', (req, res, next) => {
    
  console.log(facebookLoginUrl)
    return res.send(
      `<a href=${url}> Connect to Instagram </a>
      </br>
        <a href=${facebookLoginUrl}> connect fb</a>
      `
    );
  });

  app.use('/auth/',require('./auth/authRouter'));
 



app.listen(3000, function () {

  console.log("server started")
})
