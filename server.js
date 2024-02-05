const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('.')); // assuming your static files are in a directory named 'public'

mongoose.connect('mongodb://localhost:27017/homewow')
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error(err));
// Define a schema
const Schema = mongoose.Schema;
const mySchema = new Schema({}, { strict: false }); // Use an empty schema as an example

const session = require('express-session');

app.use(session({
  secret: 'chicken',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Note: a secure cookie requires an HTTPS connection
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// Create a model for the 'user' collection
const UserModel = mongoose.model('user', mySchema);

app.get('/users', (req, res) => {
  UserModel.find()
  .then(results => {
    res.json(results);
  })
  .catch(error => console.error(error));
});

class User {
  constructor(id, name, email, userType) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.userType = userType;
  }
}

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   UserModel.findOne({ email: email })
//     .then(user => {
//       if (!user || password !== user.password) { // Note: In a real application, never store passwords in plain text
//         res.redirect('/login.html?loginError=Invalid email or password');
//       } else {
//         const loggedInUser = new User(user._id, user.name, user.email, user.userType);
//         req.session.user = loggedInUser;
//         console.log(loggedInUser);

//         // Check the userType and redirect accordingly
//         if (user.userType === 'tenant') {
//           res.redirect(`/tenant.html?username=${user.name}`);
//         }
//         else if (user.userType === 'Owner/Agent') {
//           res.redirect('/owner-agent.html');
//         }
//         else if (user.userType === 'Admin'){
//           res.redirect('/admin-dashboard.html');
//         }
//       }
//     })
//     .catch(error => console.error(error));
// });
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then(user => {
      if (!user || password !== user.password) { // Note: In a real application, never store passwords in plain text
        res.redirect('/login.html?loginError=Invalid email or password');
      } else {
        const loggedInUser = new User(user._id, user.name, user.email, user.userType);
        req.session.user = loggedInUser;
        console.log(loggedInUser);

        // Check the userType and redirect accordingly
        if (user.userType === 'tenant') {
          res.redirect(`/tenant.html?username=${user.name}&userType=${user.userType}`);
        }
        else if (user.userType === 'Owner/Agent') {
          res.redirect(`/owner-agent.html?username=${user.name}&userType=${user.userType}`);
        }
        else if (user.userType === 'Admin'){
          res.redirect(`/admin-dashboard.html?userType=${user.userType}`);
        }
      }
    })
    .catch(error => console.error(error));
});

app.post('/signup', (req, res) => {
  const { name, password, email, phone, gender, userType } = req.body;

  const newUser = new UserModel({ name, password, email, phone, gender, userType });

  newUser.save()
    .then(() => res.redirect('/login.html'))
    .catch(error => console.error(error));
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) {
      return console.log(err);
    }
    console.log("Logout successful");
    res.redirect('/index.html');
  });
});

app.get('/current-user', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
