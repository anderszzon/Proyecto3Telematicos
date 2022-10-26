const express = require("express");
const path = require("path");
const app = express();
const puerto = process.env.PORT;
//const puerto = 5000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('/app/public'));

//app.use(express.static(__dirname + '/public'));

//app.set('views',__dirname+'/views');

app.set('views','/app/views');


app.get("/",(req, res)=>{
   // console.log(__dirname);
    res.render("principal");
});
//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando servidor");
});