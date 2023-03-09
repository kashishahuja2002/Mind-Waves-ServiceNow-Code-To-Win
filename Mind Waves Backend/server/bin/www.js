const app = require('../app')
const http = require('http')
const mongoose = require('mongoose');
const express = require('express')
const path = require('path');

mongoose.set('strictQuery', true) 
// replace <dbuser> and <dbpassword> with your MongoDB Atlas database user credentials
const uri = 'mongodb+srv://kashishahuja2002:kashish%40atlas15@mindwaves.xnruwfn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.log('Error connecting to MongoDB Atlas:', error);
});

// mongoose.connect('mongodb://127.0.0.1:27017/MindWaves', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err) => {
//     if (err) {
//         console.log("err", err);
//     }
//     console.log('Connected')
// })

app.use(express.static(path.join(__dirname, '../../../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
});

const port = 8000
app.set('port',port)

const server = http.createServer(app)



server.listen(port,()=>{
  console.log("App is running on port",port)
})

