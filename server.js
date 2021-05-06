// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/index'));

/* 

Cloud Name: dyz1jgp39
API Key: 167558493262488

Install: 

$ npm install cloudinary

Include the blow variable: 

var cloudinary = require('cloudinary').v2;;

Sample Cloudinary image upload code: 

cloudinary.uploader.upload("sample.jpg", 
{"crop":"limit","tags":"samples","width":3000,"height":2000}, 
function(result) { console.log(result) });

Sample image manipulation code: 
cloudinary.image("sample", 
{"crop":"fill","gravity":"faces","width":300,"height":200,
"format":"jpg"});

*/

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});