let express = require('express');
let app = express();

app.use('/static', express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});