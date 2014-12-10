var connect = require('connect');
connect().use(connect.static(__dirname)).listen(80);
console.log('Server started on port 80');