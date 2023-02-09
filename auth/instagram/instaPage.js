
var axios = require('axios');
async function getMediaData(req,res){
   
    let token=req.session.token
    const url = `https://graph.instagram.com/me/media?fields=media_url&access_token=${token}`
    const respLong = await axios.get(url)
    let media  = respLong.data.data;
    res.send(`
    <html>
      <body>
        ${media.map((i) => `<img style="width:100px;height:30vh" src="${i["media_url"]}" />`).join("")}
      </body>
    </html>
  `);
}

module.exports = {
    getIntaPage:getMediaData,

}