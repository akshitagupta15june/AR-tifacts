const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
app.use('/cssFiles', express.static(path.join(__dirname, 'cssFiles')));
app.use('/htmlFiles',express.static(path.join(__dirname, 'htmlFiles')));
app.use(express.static('cssFiles'));


app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/index.html");
});

app.get('/htmlFiles/event.html', (req, res) => {
    const filePath = path.join(__dirname, '..', 'htmlFiles', 'event.html');
    res.sendFile(filePath);
  });

app.get('/Backend/index.html', (req, res) => {
    const filePath = path.join(__dirname, '..', 'Backend', 'index.html');
    res.sendFile(filePath);
  }); 

  app.get('/htmlFiles/form1.html', (req, res) => {
    const filePath = path.join(__dirname, '..', 'htmlFiles', 'form1.html');
    res.sendFile(filePath);
  }); 
  app.get('/htmlFiles/form2.html', (req, res) => {
    const filePath = path.join(__dirname, '..', 'htmlFiles', 'form2.html');
    res.sendFile(filePath);
  }); 

  const mongoose = require("mongoose");
  const bodyParser = require("body-parser");
  
  app.use(bodyParser.urlencoded({extended: true}));
  mongoose.connect("mongodb+srv://user0:testdb123@cluster0.ibl8hcg.mongodb.net/form1data",{useNewUrlParser:true},{useUnifiedTopology:true})
  
  const formSchema ={
      firstName : String,
      lastName : String
  }
  
  const Form = mongoose.model("Form", formSchema);

  app.post('/submit', (req, res) => {
    const newForm = new Form({
      firstName: req.body.fname,
      lastName: req.body.lname
    });
  
    newForm.save()
      .then(() => {
        // Redirect to the same form page
        res.sendFile(path.join(__dirname,'..', 'htmlFiles', 'form1.html'));
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  




