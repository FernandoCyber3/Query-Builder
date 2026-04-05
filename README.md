# 🏗️ Projeto: Query Builder com Knex.js & Node.js

Este projeto demonstra a implementação de um **Query Builder** utilizando **Knex.js**. A ferramenta permite a construção de consultas SQL complexas através de métodos JavaScript, garantindo maior segurança contra *SQL Injection*, produtividade e portabilidade entre diferentes bancos de dados.

## 🛠️ Tecnologias e Ferramentas
*   **Runtime:** Node.js
*   **Query Builder:** Knex.js<br>
    <img width="603" height="362" alt="image" src="https://github.com/user-attachments/assets/c0fa700a-e10e-4eac-8bea-e900ca9d5809" />

*   **Banco de Dados:** SQLite (via Beekeeper Studio)<br>
    <img width="1856" height="917" alt="image" src="https://github.com/user-attachments/assets/2ffee2c3-0ad1-4dba-b7a6-a4b2985b172e" />


*   **Testes de API:** Insomnia<br>
    <img width="1325" height="540" alt="image" src="https://github.com/user-attachments/assets/395dd2ff-2f1b-41db-8f41-40cbdf80818c" />


---

## 📂 Ciclo de Vida: Migrations & Estrutura
As **Migrations** foram utilizadas como um controle de versão para o banco de dados, permitindo que a equipe acompanhe as mudanças na estrutura sem scripts manuais.

*   **Criação de Tabelas:** Definição de schemas via código.
*   **Alteração de Tabelas:** Criação de novas migrations para modificar colunas existentes.
*   **Rollback (Reversão):** Capacidade de desfazer alterações e retornar o banco a um estado anterior com segurança.
*   **Beekeeper Studio:** Utilizado para visualizar as mudanças em tempo real e validar a estrutura.

---

## 🧪 Manipulação de Dados (CRUD)

O projeto cobre todas as operações essenciais utilizando a sintaxe do Knex:

### 1. Inserção (Insert)
*   **Método Padrão:** Inserção de objetos JavaScript diretamente nas tabelas.
*   **Knex Raw:** Uso de consultas brutas (`knex.raw`) para casos específicos onde o SQL manual é necessário por performance ou funções nativas do banco.<br>
<img width="952" height="304" alt="image" src="https://github.com/user-attachments/assets/f52fe666-3d4b-47d4-9516-58c201579491" />


### 2. Consultas e Filtros (Select)
*   Buscas simples e filtradas.
*   Uso de **Seeds**: Scripts automatizados para popular o banco de dados com dados de teste iniciais.<br>
<img width="1404" height="765" alt="image" src="https://github.com/user-attachments/assets/2f573b02-c439-4a17-82a1-20e15faaa639" />

### 3. Atualização e Remoção
*   **Update:** Atualização de registros baseada em IDs ou condições.
*   **Delete:** Remoção segura de dados.

---

## 🔗 Relacionamentos e Consultas Avançadas
A complexidade do projeto aumenta com a gestão de dados relacionados:

*   **Relacionamentos:** Configuração de Chaves Estrangeiras (*Foreign Keys*) entre tabelas.<br>
<img width="645" height="196" alt="image" src="https://github.com/user-attachments/assets/50df79bc-8393-44fa-b678-3587456371a3" />

*   **Cadastro de Módulos:** Estruturação de sistemas modulares onde uma entidade depende de outra.<br>
<img width="1318" height="455" alt="image" src="https://github.com/user-attachments/assets/2200a6e8-1b5e-4f98-97ef-e9f00d634942" />

*   **Inner Join:** Realização de consultas que combinam dados de múltiplas tabelas em um único resultado, otimizando a entrega de informação para o front-end.<br>
<img width="1318" height="619" alt="image" src="https://github.com/user-attachments/assets/efc778c8-60d6-405f-902e-e6e503d98617" />


---

## 🚀 Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
Execute as migrations para criar o banco:

Bash
npx knex migrate:latest
(Opcional) Popule o banco com dados de teste:

Bash
npx knex seed:run
Teste as rotas através do Insomnia (importando o workspace disponível na pasta docs/).
