// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2>Categorias de Livros</h2>`;
const booksByCategory = [
  {
    category: 'Infantil',
    books: [
      {
        title: 'O pequeno principe',
        author: 'Antoine de Saint-Exupéry',
        coverBook: '',
      },
      {
        title: 'Bisa Bia, Bisa Bel',
        author: 'Ana Maria Machado',
      },
    ],
  },
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Mulher Rica',
        author: 'Kim Kiyosaki',
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason',
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter',
      },
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker',
      },
    ],
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury',
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury',
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey',
      },
    ],
  },
];

function livrosCategory(recorrido) {
  let i = 1;

  for (let recorrido2 of recorrido.books) {
    var spanNova = document.createElement('span');
    var livroNovo = document.createTextNode(
      '\nLivro ' + i + ': ' + recorrido2.title + ' por ' + recorrido2.author
    );
    spanNova.appendChild(livroNovo);
    var spanAtual = document.getElementById('complemento');
    document.body.insertBefore(spanNova, spanAtual);
    i++;
  }
}
const cate = document.getElementById('category');
var elemento;
for (let recorrido of booksByCategory) {
  var divNova = document.createElement('div');
  var conteudoNovo = document.createTextNode(recorrido.category);
  divNova.appendChild(conteudoNovo);
  var divAtual = document.getElementById('category');
  document.body.insertBefore(divNova, divAtual);

  var pNova = document.createElement('p');
  var numNovo = document.createTextNode(
    'Número de livros registrados para esta categoria: ' +
      recorrido.books.length
  );
  pNova.appendChild(numNovo);
  var pAtual = document.getElementById('complemento');
  document.body.insertBefore(pNova, pAtual);

  livrosCategory(recorrido);
}

// Import stylesheets
import './style.css';
