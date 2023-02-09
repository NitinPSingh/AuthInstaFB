var axios = require('axios');
async function getMediaData(req,res){
   
    let token=req.session.token
 const { data } = await axios({
    url: 'https://graph.facebook.com/me',
    method: 'get',
    params: {
      fields: ['id', 'email', 'first_name', 'last_name'].join(','),
      access_token: token,
    },
  });
  console.log(token); // { id, email, first_name, last_name }
  return data;
 
}

module.exports = {
    getFBPage:getMediaData,

}