"use strict";

var async = require('async');

function isEven(n, callback) {
	callback(null, n % 2 === 0);
}

exports.handler = function (event, context) {
	async.map(event, isEven, function(err, result) {
		context.succeed(result);
	});
};