"use strict";

var async = require('async');

function isEven(n, callback) {
	callback(null, n % 2 === 0);
}

exports.handler = function (event, context, callback) {
	if (!event || event.constructor !== Array) {
		callback(new Error("Invalid input"));
	} else {
		async.map(event, isEven, function(err, result) {
			callback(null, result);
		});
	}
};