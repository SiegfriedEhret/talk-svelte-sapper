import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

import bodyParser from "body-parser";

// TODO Afficher la console (fetch is undefined), ne pas mettre en commentaire:

// import fetch from "isomorphic-fetch";

// global.fetch = (url, opts) => {
// 	if (url[0] === "/") {
// 		url = `http://localhost:${PORT}${url}`;
// 	}
// 	return fetch(url, opts);
// };

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		bodyParser.json(),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
