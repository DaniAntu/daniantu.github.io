// NavBar
const navbar = document.getElementById('navbar');
navbar.innerHTML = `
<header>
  <div class="nav-item">
    <div class="mug-menu">
      <ul>
        <li>
          <a href="#home" class="location-l"><i class="fas fa-mug-hot icohome"></i></a>
        </li>
        <li class="dot-icon">
          <a class="location-r"><i class="fas fa-ellipsis-v"></i></a>
        </li>
      </ul>
    </div>
    <div id="menu-collapse" class="menu">
      <nav class="container menu-nav">
        <ul>
          <li><a href="#skills">Habilidades Técnicas</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contáctame</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>`;

navbar.addEventListener('click', (event) => {
  if (event.target.className === 'fas fa-ellipsis-v' || event.target.className === 'location-l') {
    document.getElementById('menu-collapse').style.display = 'block';
  } else {
    document.getElementById('menu-collapse').style.display = 'none';
  }
});

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
const about = document.getElementById('about');
about.innerHTML = `
<div class="backcolor">
    <div class="about-me sizing container">
      <div class="bio-about">
        <div>
          <h1>SOBRE MÍ</h1>
        </div>
        <div class="text-about">
          <span>
            ¡Hola!, Mi nombre es Daniela, soy Ingeniera Informática y Front-End Developer. Entusiasta del estudio
            y nuevos desafíos. En los proyectos, trabajo con metodologías ágiles. Por lo tanto, lo más importante
            para mi, es trabajar en equipo con los desarrolladores, junto con los responsables del negocio;
            entregar software funcional frecuentemente, promoviendo el desarrollo sostenible, manteniendo la
            simplicidad, la auto-organización, la mejora continua y la mentalidad de crecimiento.
          </span>
        </div>
      </div>
      <div class="little-line"></div>
      <div class="bio-about verticaline">
        <div>
          <h5 class="complicated-text">No lo hagas COMPLICADO,</h5>
          <h1 class="keep-text">Keep It Simple</h1>
        </div>
        <div>
          <p class="things-about">OTRAS COSAS QUE HAGO</p>
          <div class="like-about">
            <div class="card">
              <img class="icons-things" src="./assets/yoga.svg" alt="yoga" title="Yoga" />
              <p class="stuffs-text">Yoga</p>
            </div>
            <div class="card">
              <img class="icons-things" src="./assets/wool.svg" alt="tejer" title="Tejer" />
              <p class="stuffs-text">Tejer</p>
            </div>
            <div class="card">
              <img class="icons-things" src="./assets/book.svg" alt="leer" title="Leer" />
              <p class="stuffs-text">Leer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

// Projects
const projects = document.getElementById('projects');
projects.innerHTML = `
<div class="projects container">
  <div class="projects-title">
    <h1><span>Mis Projectos</span></h1>
  </div>
  <div class="little-line"></div>
  <div class="projects-content">
    <div class="overlay size-card backcolor">
      <div class="back-text">
        <h2 class="card-title">
          <i class="fas fa-chevron-right"></i>
            Burger Queen
          <i class="far fa-window-minimize"></i>
        </h2>
      </div>
      <img src="./assets/burger.png" class="card-img-top" alt="burger queen app" />
      <div class="project-info">
        <div class="card-body">
          <p class="card-text">Aplicacion para realizar pedidos de un restaurant.</p>
          <small class="text-muted">
            Desarrollado en Angular, Angular Material, MongoDB
          </small>
        </div>
        <div class="card-footer">
          <a href="https://github.com/DaniAntu/SCL007-BurgerQueen" class="btn-a">
            Código
          </a>
          <a href="https://github.com/DaniAntu/SCL007-BurgerQueen" class="btn-a">
            Demo
          </a>
        </div>
      </div>
    </div>
    <div class="overlay size-card backcolor">
      <div class="back-text">
        <h2 class="card-title">
          <i class="fas fa-chevron-right"></i>
            Data Lovers
          <i class="far fa-window-minimize"></i>
        </h2>
      </div>
      <img src="./assets/data.png" class="card-img-top" alt="data lovers" />
      <div class="project-info">
        <div class="card-body">
          <p class="card-text">Web que muestra Pokemones, 1° Generación.</p>
          <small class="text-muted">
            Desarrollado en JavaScript y Materialize.
          </small>
        </div>
        <div class="card-footer">
          <a href="https://github.com/DaniAntu/Data-Lovers-Review.git" class="btn-a">
            Código
          </a>
          <a href="https://daniantu.github.io/Data-Lovers-Review/" class="btn-a">
            Demo
          </a>
        </div>
      </div>
    </div>
    <div class="overlay size-card backcolor">
      <div class="back-text">
        <h2>
          <i class="fas fa-chevron-right"></i>
            Food and Travel 
          <i class="far fa-window-minimize"></i>
        </h2>
      </div>
      <img src="./assets/travel.png" class="card-img-top" alt="food travel app" />
      <div class="project-info">
        <div class="card-body">
          <p class="card-text">Aplicación para viajeros que quieren compartir sus experiencias culinarias.</p>
          <small class="text-muted">
            Proyecto colaborativo. Desarrollado en JavaScript, HTML5, Firebase.
          </small>
        </div>
        <div class="card-footer">
          <a href="https://github.com/DaniAntu/SCL007-Social-Network.git" class="btn-a">
            Código
          </a>
          <a href="https://johannagoenagac.github.io/SCL007-Social-Network/" class="btn-a">
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

// Contact
const contact = document.getElementById('contact');
contact.innerHTML = `<div class="backcolor">
          <div class="contact sizing container">
            <div class="contact-title">
              <h1>CONTACTO</h1>
            </div>
            <div class="little-line"></div>
            <div class="contact-content verticaline">
              <div>
                <span class="pulse">
                  <a class="link-a" href="mailto:d.asenjo.c@gmail.com">
                    <i class="fas fa-mail-bulk icon-effect"></i>
                  </a>
                </span>
              </div>
              <div>
                <span class="pulse">
                  <a class="link-a" href="https://github.com/DaniAntu">
                    <i class="fab fa-github-square icon-effect"></i>
                  </a>
                </span>
              </div>
              <div>
                <span class="pulse">
                  <a class="link-a" href="https://www.linkedin.com/in/daniela-asenjo-curri%C3%A1n-5b738198">
                    <i class="fab fa-linkedin icon-effect"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>`;
