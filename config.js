var in_client_id = 1668271983591390,
		in_client_secret = 'a09fbbabdf323bdf1caa1277fa300bbc',
		in_redirect_uri = 'http://localhost:3000/auth/instagram/callback',
		in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=' + in_client_id + '&redirect_uri=' + in_redirect_uri + '&response_type=code'

// var db_uri = 'mongodb://localhost:27017/instagram-auth';

module.exports = {

	port: process.env.PORT || 3000,
	instagram: {
		client_id: in_client_id,
		client_secret: in_client_secret,
		auth_url: in_auth_url,
		redirect_uri: in_redirect_uri
	}

};