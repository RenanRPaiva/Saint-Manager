<!-- BADGES -->
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)](https://www.linkedin.com/in/renan-r-s-paiva/)


<br />
<div align="center">
 <a href="https://projeto-2-saint-manager.vercel.app/">
   <img src="https://user-images.githubusercontent.com/101148797/182462855-8fb807ce-9ba6-4bd2-8fbd-1fd51d1e094a.png" alt="Logo Saint Manager">
 </a>
 
  <h3 align="center">Saint Manager</h3>

  <p align="center">
    Catálogo de Eventos religiosos onde o membro (Fiel) pode se cadastrar e inscrever nos eventos desejados.
    <br />
    <a href="https://projeto-2-saint-manager.vercel.app/"><strong>Acessar demonstração »</strong></a>
    <br />
    (<a href="#usuários-pré-cadastrados">ver usuários pré-cadastrados</a>)
  </p>
  </div>
  
  <details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#processo-de-trabalho">Processo de trabalho</a></li>
    <li>
      <a href="#como-executar-o-projeto">Como executar o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#executando-a-api">Executando a API</a></li>
        <li><a href="#executando-o-site">Executando o site</a></li>
        <li><a href="#usuários-pré-cadastrados">Usuários pré-cadastrados</a></li>
      </ul>
    </li>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#autor">Autor</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>

# Sobre o projeto

Existe certas tecnologias que trazem conforto e rapidez, hoje as igrejas e vários tipos de instituição não podem se esconder e deixar passar as gerações mais novas, vindo para internet, elas podem trazer informações sobre seus eventos, trazendo vários fieis a se interessar e se inscrever.

Neste portal os fieis conseguem listar os eventos disponibilizados pela instituição, visualizar detalhes sobre eles e se inscrever nos eventos desejados.

Com o recurso de criação de conta o usuário informa os dados apenas uma vez, facilitando a inscrição em múltiplos eventos.

Além disso, a instituição também possui acesso a área logada, onde pode gerenciar os eventos disponíveis sem depender de um programador para alterar essas informações do site.

A demonstração do portal funcionando está disponível no link https://projeto-2-saint-manager.vercel.app/. [Clique aqui para ver usuários pré-cadastrados](#usuários-pré-cadastrados).

Os recursos implementados foram:

- Layout responsivo que se adequa a diferentes tamanhos de tela;
- Listagem dinâmica de eventos;
- Página de detalhe com mais informações do eventos;
- Inscrição nos eventos;
- Cadastro de usuários;
- Autenticação de usuários membros e administradores;
- Área fechada disponível apenas para usuários logados;
- Gestão de eventos disponível apenas para usuários administradores.

# Processo de trabalho

O primeiro passo foi escolher um problema: instituições religiosas que precisam exibir os eventos disponíveis e aceitar inscrições.

Seguindo a proposta do Bootcamp, a solução do problema foi implementada em duas etapas. Uma primeira mais simples que já permitia exibir os eventos e receber inscrições e uma segunda que incrementou as funcionalidades através do recurso de autenticação e gestão de eventos.

Desta forma, foi elaborado um protótipo da primeira e da segunda etapa utilizando a ferramenta Figma e que está disponível nos link: https://www.figma.com/file/TfC992ex4u3zBHYcNUORJ3/Projeto-3---Saint-Manager?node-id=0%3A1

Para manter o site em pleno funcionamento enquanto a segunda etapa era desenvolvida, foi criada uma `branch` no repositório para a parte 2. Apenas após finalizar a segunda etapa que o código foi mesclado para a `branch` `main`.

Como o foco deste projeto era o desenvolvimento do front-end, utilizei a biblioteca `json-server` para criar uma api falsa que recebe as requisições do front.

A gestão do projeto foi feita com base no ciclo PDCA (Planejar, Executar, Checar, Agir) e as tarefas foram quebradas em cards do Trello com base no quadro Kanban. O Trello está disponível pelo link: https://trello.com/b/cyVODXQP/projeto-2-saint-manager

# Como executar o projeto

## Pré-requisitos

Antes de seguir o passo a passo para executar o projeto é preciso ter instalado no computador o [Git](https://git-scm.com/), o [Node.js](https://nodejs.org) e o gerenciador de pacotes `npm` (instalado junto com o Node.js) ou `yarn`.

## Executando a API

Para que o site funcione é preciso que a API esteja funcionando. Siga os passos abaixo para executá-la:

- Faça o download do código fonte no computador do API - Saint Manager:
```sh
git clone https://github.com/RenanRPaiva/Saint-Manager-Api.git
```

- Com o terminal na pasta `api` execute os comandos abaixo para instalar as dependências e iniciar a API:
```sh
npm install
npm run start-dev
```
ou

```sh
yarn add
yarn start-dev
```

Link da API no Github: [Github](https://github.com/RenanRPaiva/Saint-Manager-Api)

## Executando o site

- Faça o download do código fonte no computador do Saint Manager:
```sh
git clone https://github.com/RenanRPaiva/Saint-Manager.git
```
- Vá até a pasta `Saint-Manager`;
- Duplique o arquivo `.env.example` e renomeie para `.env.local`. Na variável `REACT_APP_API_URL` coloque o endereço em que a api está rodando (Ex: http://localhost:3001);
- Com o terminal na pasta `Saint-Manager` execute os comandos abaixo para instalar as dependências e iniciar o site:
```sh
npm install
npm run start
```
ou

```sh
yarn add
yarn start
```
## Usuários pré-cadastrados

O banco de dados da API já conta com os seguintes usuários de demonstração:

### Administrador

**E-mail:** admn@adm.com

**Senha:** 12345

### Membro

**E-mail:** membro@membro.com

**Senha:** 1234

# Tecnologias utilizadas
- HTML 5
- CSS
- Javascript
- React
- Bootstrap com a bilioteca `react-bootstrap`
- Redux (puro, sem toolkit)
- Styled-components
- `json-server` e `json-server-auth`

# Autor
Renan Rodrigues S. Paiva - renan_13rj@yahoo.com.br

https://www.linkedin.com/in/renan-r-s-paiva/

# Agradecimentos

Obrigado [Infnet](https://www.infnet.edu.br/). Este projeto foi uma grande oportunidade de iniciar no desenvolvimento com o framework React já tendo contato com ferramentas avançadas como o Redux. Também não esquecer do professor [Victor](https://www.linkedin.com/in/victorassis/) pelo apoio e excelente profissional.



