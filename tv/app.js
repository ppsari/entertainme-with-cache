const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

let index = require('./routes/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/tvs', index);
app.use(cors());

mongoose.connect('mongodb://localhost/tv',(err,res)=>{
  console.log(err?err:'Berhasil connect ke db');
})

app.set('port', 3002);
console.log('port : '+app.get('port'))
app.listen(app.get('port'), () => {
  console.log('magic happen at http://localhost:',app.get('port'))
})