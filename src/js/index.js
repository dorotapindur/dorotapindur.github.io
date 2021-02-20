import '../scss/main.scss';

console.log("Hi, I'm Dora - nice to meet you! 🚀")

const card = document.querySelectorAll(".card");

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0px)";
    } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(30px)";
    }
  });
},
{rootMargin: "0px 0px -50px 0px"});

card.forEach((section) => {
  observer.observe(section);
});
/*
//green-squares
const box = document.getElementById("box");
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let screenWidth = window.screen.width;
const quantity = Math.floor(screenWidth/1.5);
console.log(quantity);
for (let i=0; i<=quantity; i++) {
  const random = getRandom(0, quantity);
  if (i > random) {
    box.innerHTML += '<div class="green-square lightgreen"></div>';
  } else {
    box.innerHTML += '<div class="green-square"></div>';
  };
};
const allSquares = document.querySelectorAll('.green-square');
function pickAnimatedSquare() {
  const square = getRandom(0, quantity);
  allSquares[square].className += ' blink';
};
const interval = setInterval(() => {
  pickAnimatedSquare();
}, 2000);


/*
const repositoryList = document.querySelector('.repository-list--js');

fetch('https://api.github.com/users/dorotapindur/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const{name, html_url, description, homepage} = repo;
        const image = '';
        console.log(`NAME: ${name} ADDRESS: ${html_url} DESCRIPTION: ${description} DEMO: ${homepage}`);
        const cardTemplate = `<li class="card">
        <img src="img/Github-white.svg" class="card__github-icon" width="24" height="24" alt="" />
         <img class="card__thumbnail" src="./src/assets/img/the-x-animation.jpg" alt="project thumbnail image" />
        <div class="card__text-container">
            <p class="card__category">project:</p> <p class="card__content card__content--project">${name}</p>
            <p class="card__category">description:</p> <p class="card__content card__content--description">${description}</p>
          
            <p class="card__category card__category--demo">demo:</p> <p class="card__content card__content--demo">&lt;<a class="card__link" href="${homepage}" rel="noopener noreferrer" target=_blank title="${name} - demo">link to demo</a>&gt;</p>
            <p class="card__category">github:</p> <p class="card__content card__content--source">&lt;<a class="card__link" href="${html_url}" rel="noopener noreferrer" target=_blank title="${name} - repository">source code</a>&gt;</p>
        </div>
      </li>`;

      if (description){
        repositoryList.innerHTML += cardTemplate;
      }
    }
})
.catch(error => {
    console.log(error);
    console.log('api connection failed');    
})
*/
