const express = require('express')
const mysql = require('mysql');
const geradorNome =  require('gerador-nome')

const app = express()
const port = 3000

// Configuração do MySql
const config = {
    host: 'db',
    user:'root',
    password: 'root',
    database: 'nodedb'
};

// Conectando ao MySql
const connection = mysql.createConnection(config);

// Criar tabela
let sqlComand = "CREATE TABLE IF NOT EXISTS `nodedb`.`people` (id int not null auto_increment, name VARCHAR(255), primary key(id))";
connection.query(sqlComand);

// Criando query de inserção de um nome aleatório no banco
const sqlInsert = `INSERT INTO people(name) values('${geradorNome.geradorNome()}')`

// Inserindo o nome no banco
connection.query(sqlInsert);

const names = [];

// recuperando os nomes salvos no banco
connection.query(`SELECT * FROM people`, (err, rows) =>{
    if(err) throw err;

    for(let people of rows)
        names.push(people.name);
});

connection.end();

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!!</h1> ${printNames()}`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}!`)
});

function printNames(){
    let table = '<table>';

    for(const name of names)
        table += `<table><tr><td>${name}</td></tr>`;

    table += '<\table>';
    return table;
}