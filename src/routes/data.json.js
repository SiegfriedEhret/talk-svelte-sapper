import { readFile, writeFile } from "fs";
import { resolve } from "path";
import send from '@polka/send-type';

import uuid from "uuid/v4";

const cwd = process.cwd();
const filePath = resolve(cwd, "./data.json");
const encoding = "utf8";
const getId = function() {
	return Math.random()
		.toString(36)
		.substring(2);
};

export function get(req, res) {
	readFile(filePath, encoding, function(err, data) {
		if (err) {
			send(res, 500);
		} else {
			send(res, 200, data);
		}
	});
}

export function post(req, res) {
	readFile(filePath, encoding, function(err, data) {
		const now = +new Date();
		const newData = JSON.stringify(
			[
				...JSON.parse(data),
				{ ...req.body, id: uuid(), createdAt: now, updatedAt: now }
			],
			null,
			2
		);

		writeFile(filePath, newData, encoding, function(err) {
			res.statusCode = err ? 500 : 201;

			res.end();
		});
	});
}
