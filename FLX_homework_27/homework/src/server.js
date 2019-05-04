let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let routes = require('./routes');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
