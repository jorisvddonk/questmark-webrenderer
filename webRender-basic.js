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
      button.classList.add('questmark');
      const event = new CustomEvent('selectQuestmarkOption', { detail: element });
      window.dispatchEvent(event);
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

    const style = document.createElement('style');
    style.textContent = `span.questmark {
      white-space: pre-line;
    }`;
    document.head.appendChild(style);

    window.logElement = document.createElement('div');
    document.body.appendChild(window.logElement);
    log = (body) => {
      console.log(body);
      const span = document.createElement('span');
      span.textContent = body;
      span.classList.add('questmark');
      window.logElement.appendChild(span);
    }
    clear = () => {
      window.logElement.innerHTML = "";
    }
  }
  log(body);
};
document.body.textContent = '';
