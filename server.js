const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('Hello travis CI.');
});

app.listen(app.get('port'), () => {
  console.log(`Travis test app running on port ${app.get('port')}`);
});