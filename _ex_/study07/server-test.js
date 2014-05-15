var http = require('http');
var url  = require('url');

http.createServer(function (req, res) {
	var query = url.parse( req.url , true).query;


	console.log(query.q)

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello aji\n');

}).listen(3001, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3001/');