import logoSrc from '../../assets/img/yeoman-logo.png';

export default class Logo {
  constructor() {
  }

  render() {
    let logoElem = document.createElement("img");
    logoElem.src = logoSrc;
    logoElem.className = "logo";

    return logoElem;
  }
}
