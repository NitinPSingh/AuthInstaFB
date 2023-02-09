
var FormData = require('form-data');

var axios = require('axios');


let accessCode='';
let redirect_uri='';
let accessShortToken='';
let accessLongToken = null;
let appId = '1199653184274149';
let secr  = 'c1f878c936d02f1a03300fcbc9f76d01';
let redUri = "https://httpstat.us/200";

async function getToken(req,res){
    accessCode = req.query.code; 
     var url= "https://api.instagram.com/oauth/access_token"
	const form = new FormData();
		var item={
			client_id: appId,
			client_secret: secr,
			grant_type: 'authorization_code',
			redirect_uri: redUri,
			code: accessCode
		}
        for ( var key in item ) {
            form.append(key, item[key]);
        }

	const respLong = await axios.post(url, form, { headers: form.getHeaders() })

    console.log(respLong)
    accessShortToken =respLong.data.access_token
    console.log(respLong.data.access_token)
    
    let longtoken =await getLongLifeAccesstoken(respLong.data.access_token)
    req.session.token = longtoken
    res.redirect('/auth/insta/')
  
}
async function getLongLifeAccesstoken(token,res) {
  
    const url = `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${secr}&access_token=${token}`

    const respLong = await axios.get(url)
    return respLong.data.access_token;
   
    
   
}


module.exports = {
    getAccessCode:getToken,


}