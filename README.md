# ifam-user-prototype
### Crud de Usuário Completo


* Cadastro (id, nome, login, email e senha)
* Listagem 
* Busca por (id, nome e login)
* Atualizar 
* Deletar

utilizado json-server como backend fake

![humildemenu](https://user-images.githubusercontent.com/68599201/128580480-0b11c30a-33a4-49b9-b734-9af62d278d52.png)

Angular e Bootstrap

**Backend** e **Docker** configurados para:
* Spring Boot
* Mysql

Comandos necessários:

      sudo apt-get install mvn

  ~ Diretório backend Springboot -
      
      mvn clean install
      
  ~ Diretório frontend Angular - 
  
      npm i -g json-server
      
      json-serve --watch db.json
      
      npm run start
   
