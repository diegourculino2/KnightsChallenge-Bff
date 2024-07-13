# BFF KnightsChallenge: Node + Typescript + Express framework
Repositório do BFF para o teste técnico, que tratará as regras de negócio

### Pré-requisitos

* [Docker](https://www.docker.com/products/docker-desktop/)

## Começando

* Clonar o repositório
* Na raiz do repositorio, executar docker-compose up -d

## Lista de EndPoints

[GET] /knights - Lista todos os knights 

[GET] /knights/{id} - Lista apenas 1 knight de acordo com o id

[GET] /knights/filter={filter} - Lista os herois quando setado o filter=heros  

[POST] /knights/ - Insere um novo knight

[DEL] /knights/{id} - Remove um knight e insere na lista de Heros de acordo com o id

[PUT] /knights/{id} - Edita o apelido de um knight de acordo com o id

## Construído com

* [Express](https://expressjs.com/) - A estrutura da API usada