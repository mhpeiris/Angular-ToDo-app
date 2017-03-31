var fs = require('fs');

fs.readFile('tst.txt', function(err, data)
	{
		if(err){
			return console.error(err);
		}
	console.log("Asychronous read: " + data.toString());
});

var data = fs.readFileSync('tst.txt');
console.log(data.toString());
console.log("Program ended");