const mongoose = require('mongoose');


const curuser = new mongoose.Schema({
    name: { type: String, required: true },
    handle: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
mongoose.connect('mongodb+srv://aravindmarripelli:wDkivUbzKO92e10l@cluster0.yakk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log("mongodb connected")})
.catch(err=>{console.log("error connecting to", err) });


module.exports = mongoose.model('User', curuser);
