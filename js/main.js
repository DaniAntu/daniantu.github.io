// import { skillsList } from './skills';

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
// About
// Projects
// Contact
