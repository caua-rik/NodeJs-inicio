const http = require('http');
const calculadora = require("../calculadora");

http.createServer(function (req, res){
    res.end("<h1>Soma do numeros 5 e 7: </h1>" + calculadora.soma(5, 7));
}).listen(8282);
console.log("Servidor rodando na porta 8282");