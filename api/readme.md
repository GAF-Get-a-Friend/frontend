# Rodando o projeto
> docker-compose up -d

> docker exec -it php-mysql-1 mysql -u root -p

# Criando Tabelas
> docker exec -it php-mysql-1 mysql -u root -p
No MySQL CLI, crie a tabela:

```sql
USE crud_example;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
); 
```

## Listar Usuários (GET)

### Para verificar se o endpoint de leitura (read.php) está funcionando e listar os dados no banco:

> Acesse http://localhost:8080/read.php no navegador.

Você deverá ver um JSON com a lista de usuários. Se não houver nenhum registro ainda, ele retornará um array vazio ([]).

## Criar um Usuário (POST)

### Como o navegador não permite enviar requisições POST com dados diretamente pela barra de endereços, use uma ferramenta como Postman ou cURL no terminal para enviar uma requisição POST para create.php com os dados do usuário.

Selecione o método POST.
Insira a URL: http://localhost:8080/create.php.
Vá para a aba Body e escolha form-data.
Adicione os campos:
name com um valor, por exemplo, John Doe.
email com um valor, por exemplo, john@example.com.
age com um valor, por exemplo, 30.
Clique em Send. Se tudo estiver correto, você verá a mensagem "User created successfully!".
Usando cURL no Terminal:

```bash
curl -X POST -d "name=John Doe" -d "email=john@example.com" -d "age=30" http://localhost:8080/create.php
```

## Atualizar um Usuário (POST)

### Para atualizar um usuário, você precisa do id do usuário já cadastrado:

Acesse http://localhost:8080/read.php para obter o id do usuário.

Use o id no Postman ou cURL para enviar uma requisição POST a update.php com os novos dados.

Com Postman:

Insira a URL: http://localhost:8080/update.php.
No corpo da requisição (Body), selecione form-data e adicione os campos:
id com o ID do usuário.
name, email, e age com os novos valores.
Clique em Send.
Com cURL:

```
curl -X POST -d "id=1" -d "name=Jane Doe" -d "email=jane@example.com" -d "age=28" http://localhost:8080/update.php
```
