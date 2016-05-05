let render = (element) => {
  const MSG = `Hello World!`;

  let header = document.createElement("h1");
  let newContent = document.createTextNode(MSG);
  header.appendChild(newContent);

  element.appendChild(header);
};

render(document.getElementById("app"));

