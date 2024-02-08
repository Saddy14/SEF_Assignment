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

// Create a model for the 'property' collection
const PropertyModel = mongoose.model('property', mySchema);

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
          res.redirect(`/tenant.html?username=${user.name}&userType=${user.userType}&id=${user._id}`);
        }
        else if (user.userType === 'Owner/Agent') {
          res.redirect(`/owner-agent.html?username=${user.name}&userType=${user.userType}&id=${user._id}`);
        }
        else if (user.userType === 'Admin'){
          res.redirect(`/admin-dashboard.html?username=${user.name}&userType${user.userType}&userId=${user.id}`);
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

app.use(express.json());

app.post('/update-profile', (req, res) => {
  const { id, name, email, phone } = req.body;

  console.log(`Updating profile for user with id: ${id}`);

  UserModel.findOneAndUpdate({ _id: id }, { name, email, phone }, { new: true })
    .then(user => {
        if (!user) {
            console.log(`No user found with id: ${id}`);
            res.status(404).json({ message: 'User not found' });
        } else {
            console.log(`Updated profile for user with id: ${id}`);
            res.json({ message: 'Profile updated successfully' });
        }
    })
    .catch(error => console.error(`Error updating user: ${error}`));
});

app.post('/change-password', (req, res) => {
  const { id, currentPassword, newPassword } = req.body;

  UserModel.findById(id)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        throw new Error('User not found'); // Stop execution if user is not found
      } else if (user.password !== currentPassword) {
        res.status(401).json({ message: 'Current password is incorrect' });
        throw new Error('Current password is incorrect'); // Stop execution if password is incorrect
      } else {
        return UserModel.findByIdAndUpdate(id, { password: newPassword }, { new: true });
      }
    })
    .then(() => res.json({ message: 'Password changed successfully' }))
    .catch(error => console.error(`Error changing password: ${error}`));
});

// Add a new route to handle the POST request
app.post('/add-property', (req, res) => {
  const property = new PropertyModel(req.body);
  property.save()
    .then(() => {
      res.json({ message: 'Property added successfully' });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// app.get('/properties', async (req, res) => {
//   try {
//       const userId = req.query.userId;
//       const properties = await PropertyModel.find({ userId: userId });
//       res.json(properties);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//   }
// });
app.get('/properties', async (req, res) => {
  try {
      const userId = req.query.userId;
      let properties;
      if (userId) {
          properties = await PropertyModel.find({ userId: userId });
      } else {
          properties = await PropertyModel.find();
      }
      res.json(properties);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/properties/:id', async function(req, res) {
  const id = req.params.id;

  try {
      await PropertyModel.deleteOne({ _id: id });
      res.status(200).send({ message: 'Property was deleted successfully' });
  } catch (err) {
      res.status(500).send({ error: 'There was an error deleting the property' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});