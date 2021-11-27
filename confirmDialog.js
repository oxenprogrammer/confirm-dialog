const modal = document.createElement('section');
const modelContent = document.createElement('article');
const xButton = document.createElement('span');
const modelText = document.createElement('h2');
const cancelButton = document.createElement('button');
const yesButton = document.createElement('button');

modal.setAttribute('class', 'model');
modelContent.setAttribute('class', 'model-content');
xButton.setAttribute('class', 'close-button');
cancelButton.setAttribute('class', 'cancel');
yesButton.setAttribute('class', 'yes');

xButton.textContent = `X`;
cancelButton.textContent = "Cancel";
yesButton.textContent = "Yes";
modelText.textContent = "I come from the Main Body";

modelContent.appendChild(xButton);
modelContent.appendChild(modelText);
modelContent.appendChild(cancelButton);
modelContent.appendChild(yesButton);

modal.appendChild(modelContent);

export default modal;



