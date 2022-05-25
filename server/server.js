const express = require('express');
const app = express();
const path = require('path');

try {
  if (process.env.NODE_ENV.trim() === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
  };
} catch(err){
  console.log(err);
}

app.listen(3000); //listens on port 3000 -> http://localhost:3000/