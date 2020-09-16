const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(_dirname + 'dist/mtz'));
app.get('/*', function(req,res){
	res.sendFile(path.join(_dirname+'dist/mtz/index.html'));
});
app.listen(process.env.PORT|| 8080);