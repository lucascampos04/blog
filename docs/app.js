const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');

// Configurar o middleware para analisar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Bootstrap CSS
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const Port = 3000;

// Lista em memória para armazenar os comentários temporariamente
const comentarios = [];

// Configuração do express-session e do middleware express-flash
app.use(session({
  secret: 'lucas',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

app.get('/', (req, res) => {
  res.render('index');
});

// Rota para exibir o formulário de login
app.get('/artigos', (req, res) => {
    res.render('artigo');
  });

// Rota para exibir o formulário de login
app.get('/login', (req, res) => {
  res.render('login');
});

// Rota para logout
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Rota para exibir o formulário de criação de comentários
app.get('/comentario', (req, res) => {
  res.render('lista_comentarios');
});

// Rota para salvar um novo comentário
app.post('/salvar-comentario', (req, res) => {
  const novoComentario = {
    autor: req.body.autor,
    conteudo: req.body.conteudo,
    data: new Date().toLocaleString() // Adiciona a data atual ao comentário
  };

  // Adiciona o novo comentário à lista de comentários em memória
  comentarios.push(novoComentario);

  res.redirect('/comentarios'); // Redireciona para a lista de comentários após a inserção
});

// Rota para renderizar a lista de comentários
app.get('/comentarios', (req, res) => {
  res.render('lista_comentarios', { comentarios });
});

app.listen(Port, () => {
  console.log("Rodando na porta " + Port);
});
