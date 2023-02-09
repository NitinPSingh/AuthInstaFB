var axios = require('axios');
let fbappId = '948380433202177';
let fbsec = 'b48bba5f0b1b8a164071d17f53537249';
let redUri = "https://httpstat.us/200"

async function getToken(req,res) {
    var accessCode = req.query.code; 
    console.log(req.query);
  const { data } = await axios({
    url: 'https://graph.facebook.com/v16.0/oauth/access_token',
    method: 'get',
    params: {
      client_id: fbappId,
      client_secret: fbsec,
      redirect_uri: redUri,
      code:accessCode,
    },
  });
  console.log(data);
  req.session.token = data.access_token;
  res.redirect('/auth/fb/')

};


module.exports = {
    getAccessCode:getToken,


}