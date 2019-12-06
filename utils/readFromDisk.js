var fs = require('fs');

exports.readSimpleFileIntoArrayOfNumber =  (path, callback) => {
	fs.readFile(path, 'utf8', callback)
}