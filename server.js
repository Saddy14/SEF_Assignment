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

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then(user => {

      if (!user) {
        res.redirect('/login.html?loginError=Invalid email or password');
      } 
      else if (password !== user.password) { // Note: In a real application, never store passwords in plain text
        res.redirect('/login.html?loginError=Invalid email or password');
      } 
      else {
        // Check the userType and redirect accordingly
        if (user.userType === 'tenant') {
          // res.redirect('/tenant.html');
          res.redirect(`/tenant.html?username=${user.name}`);
        }
        else if (user.userType === 'Owner / Agent') {
          res.redirect('/owner-agent.html');
        }
        else if (user.userType === 'Admin'){
          res.redirect('/admin.html');
        }

      }
    })
    .catch(error => console.error(error));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
