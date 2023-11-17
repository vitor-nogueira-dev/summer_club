
# Documentação da API: Integração Node.js, Express, MySQL e Docker
---

> Este é um CRUD completo e eficiente, desenvolvido com Node.js e Express.js, integrado ao MySQL para gestão de dados e contêinerizado com Docker para fácil implantação. Além disso, a confiabilidade é garantida por uma suíte abrangente de testes unitários e de integração, cuidadosamente elaborada com as ferramentas Mocha, Chai e Sinon, assegurando que cada componente funcione perfeitamente em conjunto.

---

### Documentação da API 📖

| Método      | Endpoint                 | Descrição       | Requer Autenticação |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET    | /club/partners | recupera todos os sócios | Não               |
| GET   | /club/partners/:id         | recupera um sócio | Não               |
| PATCH    | /club/partners/:id              | atualiza um campo específico de um sócio | Não |
| POST | /club/partners           | cria um novo sócio  | Não |
| DELETE  | /club/partners/:id               | deleta um sócio   | Não |

---

#### Método `POST`
> Para criar um novo sócio é necessário enviar o body abaixo na requisição (seguindo as regras de negócio)
```json
{
  "name": "Rafaella Gomes", // string
  "age": 25, // number, inteiro, maior de 18 anos
  "matricula": "12345678", // string com 8 caracters
  "email": "rafa_gomes@gmail.com", // email válido
  "frequent": true // booleano
}
```
#### Método `PATCH`
>  Nessa rota você pode atualizar qualquer um dos campos do sócio (1 campo é requerido)
```json
{
  "name": "Rafaella Gomes", // string
  "age": 25, // number, inteiro, maior de 18 anos
}
```

## Rodando o projeto 🚀

Clone o projeto:

```bash
git clone git@github.com:vitor-nogueira-dev/summer_club.git
```

Vá para o diretório do projeto:

```bash
cd summer_club
```

Instale as dependências:

```bash
npm install 
```

Suba os containers (Node e MySql):

```bash
docker-compose up -d
```

Acesse o terminal interativo do container `summer_club` :

```bash
docker exec -it summer_club bash
```

Inicie o servidor:

```bash
npm run dev
```
> Quando o seu console exibir a mensagem: `Server listening on port 3001` o servidor foi iniciado

#### Crie e popule as tabelas no seu banco de dados:

> Para configurar as tabelas e inserir dados de teste, utilize o `script.sql` incluído. Simplesmente copie e execute o script na interface de banco de dados de sua escolha (como a extensão MySQL no VSCode).

#### Executando os testes unitários e integração 🧪
> Execute os testes facilmente via terminal, dentro ou fora do container, com o comando:

```bash
npm test
``` 
---

### 🎥 Acompanhe e codifique com nossa Playlist

Eleve suas habilidades em desenvolvimento backend acompanhando nossa série de tutoriais no YouTube. Construa passo a passo este CRUD eficiente, explorando o padrão MSC (Model, Service, Controller), dominando o Express framework, MySQL e Docker. E aprimore a qualidade do seu código com testes unitários usando Mocha, Chai e Sinon.

> 👉 [Assista à Playlist](https://youtube.com/playlist?list=PL6ctlDQ3i0AxXy5Ne9vKFsl095Nu8Ks8y&si=GOSdS0CQjqfLkKug)

--- 

#### Redes sociais 📱

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitor-nogueira-dev/)

---

### ⭐️ Este README foi construído com o gerador de README drag in drop [Code Mark](https://code-mark.vercel.app/)


