// Due to new versions of ES6 we can install express through following also 
import express from 'express'

import cors from 'cors' ;
import bodyParser from 'body-parser';

import Connection from './database/db.js' ; 
import Routes from './routes/route.js' ;

const app = express() ; 

app.use(cors()) ;
const PORT = 8000 ; 
Connection();

// First Parse the Data then call the  app.use('/' , Routes); for routing.
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/' , Routes);

app.listen(PORT , () => console.log(`Your server is running successfully on PORT ${PORT} .`));

