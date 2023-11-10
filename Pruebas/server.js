const express = require('express');
const app = express();

app.get('/hola-mundo', (req, res) => {
	res.json({
		"messaje" : "Hola mundo"
	})
})

app.listen(8080, () => {
	console.log("server running");
})


