const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao servidor</h1>" 
    + "Lista de caminhos disponíveis: "+
    "<ul>" + 
    "<li>/produtos</li>" + 
    "<li>/consulta/ com um parametro a ser incluido obrigatoriamente após o '/'</li>" + 
    "<li>/cadastro/ com parametro podendo ser ou não incluido após o '/', caso não seja incluído parmetro um produto padrão será criado</li>" + 
    "</ul>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta: " + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto criado!</h1><BR>" + 
        "produto " + nome + " criado!");
    }else{
        res.send("<h1>produto padrão criado!</h1>");
    }

})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }

//teste 234567890

    
})
