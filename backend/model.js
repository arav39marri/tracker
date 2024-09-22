const mongoose = require('mongoose');
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;

const curuser = new mongoose.Schema({
    name: { type: String, required: true },
    handle: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
mongoose.connect(`${databaseUrl}`)
.then(()=>{console.log("mongodb connected")})
.catch(err=>{console.log("error connecting to", err) });


module.exports = mongoose.model('User', curuser);
