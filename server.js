var express=require('express');
var cors =require('cors');
var bodyParser=require('body-parser');
var app=express();
const mongoose=require('mongoose');
var port=process.env.PORT||5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const mongoURI='mongodb+srv://devikTech:9931320688v@cluster0-koncr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true
    }
).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))

if (process.env.NODE_ENV==='production'){
    app.user(express.static('client/build'));
}

var routes = require('./routes/routes')
app.use('/routes',routes)

app.listen(port,function(){
    console.log('server is running a port:'+port)
})