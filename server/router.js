const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
require( 'dotenv').config()

const clientID = process.env.CLIENTID
const clientSecret = process.env.CLIENTSECRET
const port = process.env.PORT

router.get('/', async ({ query }, response) => {
	const { code } = query;

	if (code) {
		try {
			const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: clientID,
					client_secret: clientSecret,
					code,
					grant_type: 'authorization_code',
					redirect_uri: `https://53134-lime-panther-ufkedrzg.ws-us04.gitpod.io/`,
					scope: 'identify',
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			const oauthData = await oauthResult.json();
			const userResult = await fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${oauthData.token_type} ${oauthData.access_token}`,
        },
      });

      response.query = {
        access_token: oauthData.access_token,
        token_type: oauthData.token_type,
        state: query.state
      }
		} catch (error) {
      // NOTE: An unauthorized token will not throw an error;
			// it will return a 401 Unauthorized response in the try block above
			console.error(error);
		}
	}
  
  console.log(response.query);
  return response.sendFile('./server/front/index.html', { root: '.' });
})

module.exports =  router