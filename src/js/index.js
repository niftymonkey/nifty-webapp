import "../assets/styles/base.css";
import "../assets/styles/app.css";
import logoSrc from '../assets/img/yeoman-logo.png';

let render = (element) => {
  const MSG = `Hello World!`;

  // Header
  let header = document.createElement("h1");
  header.className = "header";
  let newContent = document.createTextNode(MSG);
  header.appendChild(newContent);
  element.appendChild(header);

  // Logo
  let logo = document.createElement("img");
  logo.src = logoSrc;
  logo.className = "logo";
  element.appendChild(logo);
};

render(document.getElementById("app"));

