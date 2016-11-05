"use strict";

const async = require('async');

function isEven(n, callback) {
	callback(null, n % 2 === 0);
}

exports.handler = (event, context, callback) => {
	if (!event || event.constructor !== Array) {
		callback(new Error("Invalid input"));
	} else {
		async.map(event, isEven, callback);
	}
};
