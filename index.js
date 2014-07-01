var Promise = require('bluebird');

var curId = 1;

module.exports = {
	attempt: function(data) {
		var name = data.name || 'anon';

		return Promise.resolve({
			id: curId++,
			name: name
		});
	}
};