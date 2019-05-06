const express = require('express');
const bodyparser = require('body-parser');
const serverroutes = require('./server.routes');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}));
const router = express.Router();
const port = process.env.PORT || 8080

// nodejs server listening to port 4000 
app.listen(port, ()=>{
    console.log('Listening to port 4000')
});
// sending all the routes to serverroutes file
app.use('/', serverroutes);

module.exports = router;