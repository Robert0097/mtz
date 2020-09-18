
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/mtz'));
app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/mtz/index.html'));
});
app.listen(process.env.PORT || 8080);