import '../scss/main.scss';

console.log("Hi, I'm Dora - nice to meet you! 🚀")

const repositoryList = document.querySelector('.repository-list--js');

fetch('https://api.github.com/users/dorotapindur/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const{name, html_url, description, homepage} = repo;
        console.log(`NAME: ${name} ADDRESS: ${html_url} DESCRIPTION: ${description} DEMO: ${homepage}`);
        const cardTemplate = `<li class="card">
        <svg class="card__grey-dots" width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#464A4D"/>
          <circle cx="20" cy="4" r="4" fill="#464A4D"/>
          <circle cx="36" cy="4" r="4" fill="#464A4D"/>
        </svg>
        <img src="img/Github-white.svg" class="card__github-icon" width="24" height="24" alt="">
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