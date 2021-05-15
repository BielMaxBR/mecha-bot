const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

module.exports =  router