const app = require('../app')
const http = require('http')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/MindWaves', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("err", err);
    }
    console.log('Connected')
})

const port = 8000
app.set('port',port)

const server = http.createServer(app)


server.get('/*', (req, res) => {
    res.json({status:200});
//   res.sendFile(
//     path.resolve(
//       __dirname,
//       '../../../build',
//       'index.html'
//     )
//   );
});



server.listen(port,()=>{
  console.log("App is running on port",port)
})

