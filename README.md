# Desafio Nodejs + Nginx + MySql do Docker do Curso Full Cycle

O objetivo do desafio é gerar uma imagem do nginx que exponha a porta 8080 que, ao ser acessada pelo navegador, encaminha a chamada para uma aplicação nodejs e que, este por sua vez, vai inserir dados em uma tabela mysql

Para rodar, siga os seguintes passos:

1 - Abra seu terminal e clone o repositorio com o comando:  
`git clone https://github.com/nandopx/docker-desafio-node-nginx.git`  

2 - Acesse o diretório do repositório com o comando:  
`cd docker-desafio-node-nginx`  

3 - Por último, rode o comando abaixo para criar as imagens e rodar os containers:  
`docker-compose up -d`  

Por fim, ao abrir o navegador e acessar http://localhost:8080, deverá obter o retorno "Full Cycle Rocks!" e, abaixo, os nomes cadastrados no banco  

## Referencias:
#### https://patrickcamillo.com/blog/proxy-reverso/
#### https://danizavtz.com.br/como-servir-sua-aplicacao-nodejs-via-o-nginx-proxy-reverso/
#### https://www.workfall.com/learning/blog/how-to-connect-to-mysql-database-and-run-crud-operations-in-node-js/
#### https://www.npmjs.com/package/gerador-nome
#### https://nodejs.org/en/docs/guides/nodejs-docker-webapp
#### https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
