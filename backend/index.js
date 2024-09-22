const express = require('express');
const model = require('./model');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8900;

//temp.map((ele, index)=> console.log(ele.name) );


app.get('/', (req,res) =>{
    res.send('Hello World');
})

app.post('/create',  (req, res) =>{
    try{
    const {name, handle} = req.body;
    const usr = model.create({name,handle});
    if(usr)
    res.status(201).send(usr);
    
    }
    catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
    
});

app.get('/show', async (req, res) => {
    try{
        const users = await model.find();
        if(!users){
            console.log("no user found");
        }
        res.send(users);
    }
    catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})

app.listen(port,   (req, res) =>{
    console.log(`Server is running on port ${port} `);
})


