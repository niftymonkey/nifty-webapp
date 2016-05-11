import "../index.html";
import "../assets/styles/base.css";
import "../assets/styles/app.css";

import Header from './components/header';
import Logo from './components/logo';

let render = (element) => {
  const MSG = `Hello World!`;

  // Header
  let header = new Header(MSG);
  element.appendChild(header.render());
  // Logo
  element.appendChild(new Logo().render());
};

render(document.getElementById("app"));

