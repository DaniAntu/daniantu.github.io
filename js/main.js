// NavBar
const navbar = document.getElementById('navbar');
navbar.innerHTML = `
<header>
  <div class="nav-item">
    <nav class="container">
      <ul>
        <li>
          <a href="#home"><i class="fas fa-mug-hot icohome"></i></a>
        </li>
        <li><a href="#skills">Habilidades Técnicas</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contáctame</a></li>
      </ul>
    </nav>
  </div>
</header>`;

// Home
const home = document.getElementById('home');
home.innerHTML = `
  <div class="img-universe sizing">
    <span class="name-circle">
      <div class="name">
        DANIELA ASENJO
      </div>
      <div class="sub-text flexbox">
        <span>INGENIERA INFORMÁTICA</span>
        <span>FRONT-END DEVELOPER</span>
      </div>
    </span>
  </div>`;

// Skills
const data = SKILLSLIST.skills;
const skills = document.getElementById('skills');
skills.innerHTML = `
<div class="skills sizing container">
  <div class="title-skills">
    <H1>HABILIDADES TÉCNICAS</H1>
  </div>
  <div class="little-line"></div>
  <div id="skills-card" class="content-skills verticaline"></div>
</div>`;

function skillsArray() {
  data.forEach((element) => {
    if (element.skill === 'Materialize' || element.skill === 'Firebase') {
      document.getElementById('skills-card').innerHTML += `
      <div class="card">
        <div class="logo-skills">
          <img class="sizing-svg" src="./assets/${element.logo}" 
          alt="${element.skill}" title="${element.skill}"></img>
        </div>
        <div class="detail-skills">${element.skill}</div>
      </div >`;
    } else {
      document.getElementById('skills-card').innerHTML += `
    <div class="card">
      <div class="logo-skills">
        <i class="${element.logo} size-icon" title="${element.skill}" ></i>
      </div>
      <div class="detail-skills">${element.skill}</div>
    </div>`;
    }
  });
}
skillsArray();

// About

// Projects
// Contact
