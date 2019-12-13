const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

	log = (message) => {
		// send an HTTP request
		console.log(message);

		this.emit('messageLogged', {id: 1, url: "http://youtube.com"});
	}

}


module.exports = Logger;
