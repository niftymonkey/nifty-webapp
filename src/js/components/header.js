export default class Header {
  constructor(headerText) {
    this.headerText = headerText;
  }

  render() {
    let headerElem = document.createElement("h1");
    headerElem.className = "header";
    let newContent = document.createTextNode("Yo -- " + this.headerText);
    headerElem.appendChild(newContent);

    return headerElem;
  }
}
