const express = require('express'),
  path = require('path');


const port = 8323;
const app = express();

app.use(express.static('.'));
app.use(express.static('site'));

app.listen(port, ()=>{
  console.log('Listening on port', port, '...');
});
