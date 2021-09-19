let firstTime = false;
let log = () => {
  console.log(arguments);
};
let clear = () => {
  window.logElement.clear();
};
window.choices = (choices) => {
  if (console.table) {
    console.table(choices);
  }
  const buttonsRoot = document.createElement('div');
  buttonsRoot.setAttribute('style', `
    display: grid;
    align-content: stretch;
    justify-content: start;
    align-items: center;
    justify-items: start;
  `);
  window.logElement.appendChild(buttonsRoot);
  return new Promise((resolve, reject) => {
    choices.forEach(element => {
      const button = document.createElement('button');
      button.textContent = element.title;
      button.onclick = () => {
        clear();
        console.log(`Picked #${element.id}: "${element.title}" `);
        resolve(element.id);
      }
      buttonsRoot.appendChild(button);
    });
  });
};
window.emit = (body) => {
  if (firstTime === false) {
    document.body.textContent = '';
    firstTime = true;
    window.logElement = document.createElement('div');
    document.body.appendChild(window.logElement);
    log = (body) => {
      console.log(body);
      const span = document.createElement('span');
      span.textContent = body;
      window.logElement.appendChild(span);
    }
    clear = () => {
      window.logElement.innerHTML = "";
    }
  }
  log(body);
};
document.body.textcontent = '';
