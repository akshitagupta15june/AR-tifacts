const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up body parsing middleware
app.use(express.urlencoded({ extended: true }));

  
const formSchema ={
    Name : String,
    Email : String,
    Address: String,
    LandMark: String,
    Contact: Number,
    RegistrationNo: Number
}

const Form = mongoose.model("Form", formSchema);

app.post('/submit', (req, res) => {
  const newForm = new Form({
    Name: req.body.name,
    Email: req.body.email,
    Address: req.body.address,
    LandMark: req.body.landmark,
    Contact: req.body.tel,
    RegistrationNo: req.body.registration
  });

  newForm.save()
    .then(() => {
      // Redirect to the same form page
      res.sendFile(path.join(__dirname,'..', 'htmlFiles', 'form.html'));
    })
    .catch((err) => {
      console.log(err);
    });
});