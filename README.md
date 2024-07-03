<h1>Projeto iCasei - Micro-Frontends com Docker</h1>

> Descrição
Este projeto implementa uma aplicação utilizando micro-frontends. Ele consiste em duas aplicações principais: mf_videos e mf_drawer, juntamente com um backend para servir as requisições da API. A aplicação mf_videos permite buscar e favoritar vídeos do YouTube, enquanto mf_drawer fornece uma navegação entre vídeos e favoritos.

<h3>Estrutura do Projeto</h3>

<p>├── mf_drawer/</p>
<p>│   ├── Dockerfile</p>
<p>│   ├── index.html</p>
<p>│   ├── package.json</p>
<p>│   └── src/</p>
<p>│       ├── main.js</p>
<p>│       └── style.css</p>
<p>├── mf_videos/</p>
<p>│   ├── Dockerfile</p>
<p>│   ├── index.html</p>
<p>│   ├── favorites.html</p>
<p>│   ├── package.json</p>
<p>│   └── src/</p>
<p>│       ├── main.js</p>
<p>│       └── styles.css</p>
<p>├── bff/</p>
<p>│   ├── Dockerfile</p>
<p>│   ├── app.py</p>
<p>│   ├── requirements.txt</p>
<p>└── docker-compose.yml</p>
<h3>Pré-requisitos</h3>
<h5>Docker</h5>
<h5>Docker Compose</h5>
<h3>Configuração</h3>
<table>
  <tr>
    <td>Clone o repositório:</td>
    <td>git clone (URL-do-repositório)
cd <nome-do-repositório></td>
  </tr>
</table>
<table>
  <tr>
    <td>Adicionar API Key do YouTube:
No arquivo bff/app.py, adicione sua chave de API do YouTube: </td>
  <td>API_KEY = 'SUA_API_KEY'</td>
  </tr>
</table>
<h3>Compilar e Rodar</h3>
<table>
  <tr>
    <td>Derrubar qualquer contêiner existente:</td>
    <td>docker-compose down</td>
  </tr>
</table>
<table>
  <tr>
    <td>Construir e iniciar os contêineres:</td>
    <td>docker-compose up --build</td>
  </tr>
</table>
<h3>Testar</h3>
<p>Para garantir que o projeto está funcionando corretamente:</p
<ol>Acesse a aplicação:
<li>Abra seu navegador e vá para http://localhost:3001 para a aplicação mf_videos.</li>
<li>Navegue entre os vídeos e favoritos utilizando a barra lateral.</li>
Buscar e Favoritar Vídeos:</ol>
<li>Utilize a barra de busca para procurar vídeos.</li>
<li>Adicione e remova vídeos dos favoritos utilizando o botão de estrela.</li>
<h2>Problemas Comuns</h2>
<li>Erro de Conexão:</li>
Se os contêineres não conseguirem se conectar, certifique-se de que o backend (bff) está rodando corretamente e que as rotas estão configuradas corretamente.
<li>Alterações no Código:</li>
Se fizer mudanças no código-fonte e utilizar volumes Docker, não é necessário reconstruir os contêineres. Utilize docker-compose restart para reiniciar os serviços.
<br>
<br>
<h4>Autor</h4>
<p>Mateus Santos</p>
<br>
<h4>Licença</h4>
Este projeto está licenciado sob a MIT License.
