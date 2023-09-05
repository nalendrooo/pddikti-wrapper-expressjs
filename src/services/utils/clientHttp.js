const axios = require('axios')

const URL_BACKEND = process.env.API_PDDIKTI

const get = (path) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${URL_BACKEND}${path}`)
			.then((result) => resolve(result.data))
			.catch((err) => reject(err))
	})
}

module.exports = { get }
