var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
server.listen(3000, function(){
    console.log('listening on port 3000...');
});

//acrescentando espaços no arquivo json
app.set("json spaces", 2)


app.get('/',(req,res)=>{
    res.json({status: "Ntask API"})
})

app.get('/task',(req,res)=>{
    res.json({
        tasks:[
            {title: "Fazer Compras"},
            {title: "Consertar o PC"},
        ]
    })
})