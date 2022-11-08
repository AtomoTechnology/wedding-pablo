// const all = () => {
//   fetch('https://sheet.best/api/sheets/4f4c4162-8e59-4cf4-a718-9e674b247c27')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// all();

document.getElementById('cbu').addEventListener('click', (e) => {
  navigator.clipboard.writeText(e.target.dataset.cbu);
  document.querySelector('.tooltip').textContent = 'Copiado';
  setTimeout(() => {
    document.querySelector('.tooltip').textContent = 'Click para copiar';
  }, 3000);
});

const lists = [
  {
    tablename: 'Mesa Principal',
    adultos: 10,
    menor: 1,
    babies: null,
    persons: [
      'Miriam Toledo ',
      'Pablo Ferri ',
      'Elbio Ferri ',
      'María Rosa Gallo',
      'Enzo Ferri ',
      'Mary Bogarin ',
      'José Luis Gallo',
      'Daniela Toledo ',
      'Roberto Ayala ',
      'Ana Toledo ',
      'Luz Ayala ',
    ],
  },
  {
    tablename: 'Mesa 1',
    adultos: 7,
    menor: 3,
    babies: 2,
    persons: [
      'David Ferri',
      'Mayra Castells',
      'Fiorella Ferri',
      'Renata Ferri',
      'Giuliana Ferri',
      'Giovanni Ferri',
      'Cristian Bretto',
      'Luciana Chiarelli',
      'Luz Bretto',
      'Emanuel Belmonte',
      'Horacio Demarchi',
      'Romina Pisani',
    ],
  },
  {
    tablename: 'Mesa 2',
    adultos: 7,
    menor: 2,
    babies: null,
    persons: [
      'Natalia Ferri',
      'Damián Lorenzale',
      'Saimon Lorenzale',
      'Emma Lorenzale',
      'Mirta Mocciaro',
      'Javier Lorenzale',
      'Gabriel Denegri',
      'Elias Denegri',
      'Agustin Garay',
    ],
  },
  {
    tablename: 'Mesa 3',
    adultos: 7,
    menor: 2,
    babies: null,
    persons: [
      'Martin Leguizamón',
      'Nancy Rodríguez',
      'Belén Gauto',
      'Jeremías Block',
      'Nadia Montero',
      'Bastián Block',
      'Laura Ferri',
      'Matías Olguin',
      'Mérida Olguin',
    ],
  },
  {
    tablename: 'Mesa 4',
    adultos: 9,
    menor: 1,
    babies: null,
    persons: [
      'Dora Oitana',
      'Victoria Petrecone',
      'Abril Gómez',
      'Alexis Castillo',
      'Andrés Gómez',
      'Marina Triberti',
      'Andrea Castells',
      'Gastón Castells',
      'Jesica González',
      'Pilar Castells',
    ],
  },
  {
    tablename: 'Mesa 5',
    adultos: 6,
    menor: 3,
    babies: 2,
    persons: [
      'Alejandra Ferri',
      'Ismael Cejas',
      'Luciana Ferri',
      'Juan Hadad',
      'Dante Hadad',
      'Román Hadad',
      'Noelia Ferri',
      'Gastón Pent',
      'Jerónimo Pent',
      'Fausto Pent',
      'Martino Pent',
    ],
  },
  {
    tablename: 'Mesa 6',
    adultos: 8,
    menor: 1,
    babies: null,
    persons: [
      'Marina Karlen',
      'Martin Marino',
      'Florencia Vasconcelos',
      'Dante Marino',
      'Manuel Marino',
      'Eugenia Marino',
      'Sebastián Osudar',
      'Mónica Pérez',
      'Miguel Blati',
    ],
  },
  {
    tablename: 'Mesa 7',
    adultos: 10,
    menor: 2,
    babies: null,
    persons: [
      'Francisco Gallo',
      'Sandra Colavita',
      'Victoria Garrido',
      'Francisco Gallo Junior',
      'Fernando Gallo',
      'Ian Gallo',
      'Abigail Duarte',
      'Mariana Gallo',
      'Nicole Gallo',
      'Catalina Gallo',
      'Briana Gallo',
    ],
  },
  {
    tablename: 'Mesa 8',
    adultos: 12,
    menor: null,
    babies: null,
    persons: [
      'Cristian Marchetti',
      'Antonela López',
      'Ornella Messeroux',
      'Jean Messeroux',
      'Gonzalo Bogarin',
      'Nicolas Parisi',
      'Mailen Luna',
      'Leandro di Leonardi ',
      'Carla Belingheri',
      'Lucho Hidalgo ',
      'Lilian Soares Sanson Coelho',
      'Giuli Fernande Da Silva',
    ],
  },
  {
    tablename: 'Mesa 9',
    adultos: 12,
    menor: null,
    babies: null,
    persons: [
      'Roxana Toledo',
      'Miguel Piñanez',
      'Eloy Ibalo',
      'Sabrina Paniagua',
      'Idalina Piñanez',
      'Walter Alfonso',
      'Víctor Piñanez',
      'Francisco Piñanez',
      'Diana Alfonso Bustamante',
      'Sonia Pera',
      'Oscar Toledo',
      'Vitalina Toledo',
    ],
  },
];

document.getElementById('toggle-menu').addEventListener('click', function (e) {
  document.querySelector('#navbar-sticky').classList.toggle('active');
});
const boxes = document.querySelector('.boxes');

lists.map((table) => {
  const box = document.createElement('div');
  const ul = document.createElement('ul');
  const h3 = document.createElement('h3');

  h3.textContent = table.tablename + ` (${table.persons.length})`;

  box.classList.add('table-box');
  box.appendChild(ul);

  table.persons.map((p) => {
    const span = document.createElement('span');
    span.classList.add('text');
    span.textContent = p;
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
    `;
    li.appendChild(span);
    ul.appendChild(li);
  });
  box.appendChild(h3);
  box.appendChild(ul);
  boxes.appendChild(box);
});
