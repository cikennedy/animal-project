const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const userModel = require('./models/User.js')

const sequelize = require('./config/connection');

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// userModel.create({
//   "name": "Sal",
//   "email": "sal@hotmail.com",
//   "password": "password12345"
// }).then(function(user) {
//   console.log('we just made this dude!', user)
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// // Dependencies
// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');

// const hbs = exphbs.create({});

// // Sets up the Express App
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set Handlebars as the default template engine.
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers/index'));

// /* 

// Cloud Name: dyz1jgp39
// API Key: 167558493262488

// Install: 

// $ npm install cloudinary

// Include the blow variable: 

// var cloudinary = require('cloudinary').v2;;

// Sample Cloudinary image upload code: 

// cloudinary.uploader.upload("sample.jpg", 
// {"crop":"limit","tags":"samples","width":3000,"height":2000}, 
// function(result) { console.log(result) });

// Sample image manipulation code: 
// cloudinary.image("sample", 
// {"crop":"fill","gravity":"faces","width":300,"height":200,
// "format":"jpg"});

// */

// // Starts the server to begin listening
// app.listen(PORT, () => {
//   console.log('Server listening on: http://localhost:' + PORT);
// });