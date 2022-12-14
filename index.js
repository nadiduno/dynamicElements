// Import stylesheets
import './style.css';
// document.body.onload = adcElemento;

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Conteúdo de uma Classe de Livros e Categorias</h1>`;
const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker',
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
        title: 'Mulher Rica',
        author: 'Kim Kiyosaki',
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
const cate = document.getElementById('category');
var elemento;
for (let recorrido of booksByCategory) {
  // elemento=recorrido.category
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode('Categoria: ' + recorrido.category);
  divNova.appendChild(conteudoNovo);
  var divAtual = document.getElementById("category");
  document.body.insertBefore(divNova, divAtual);

  var pNova = document.createElement("p");
  var numNovo = document.createTextNode('Número de livros: ' + recorrido.books.length);
  pNova.appendChild(numNovo);
  var pAtual = document.getElementById("complemento");
  document.body.insertBefore(pNova, pAtual);

  // cate.innerHTML = `<li>${recorrido.category}</li>`;
}

