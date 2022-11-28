import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ; 
dotenv.config();

// Variables to be inputted in backtick strings.
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-ns2oupp-shard-00-00.nza4ufk.mongodb.net:27017,ac-ns2oupp-shard-00-01.nza4ufk.mongodb.net:27017,ac-ns2oupp-shard-00-02.nza4ufk.mongodb.net:27017/?ssl=true&replicaSet=atlas-bcjbae-shard-0&authSource=admin&retryWrites=true&w=majority` ; 
    mongoose.connect(MONGODB_URI , {useNewUrlParser : true }) ; 

    mongoose.connection.on('connected' , () => {
        console.log('Database Connected Successfully!') ; 
    })

    mongoose.connection.on('disconnected' , () => {
        console.log('Database Disconnected!') ; 
    })

    mongoose.connection.on('error' , () => {
        console.log('Error while connecting with the database! ') ;
        // console.error(); 
    })
} 

export default Connection ; 