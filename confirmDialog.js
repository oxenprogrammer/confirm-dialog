class ConfirmDialog {
  constructor(question = "Are you sure you want to continue?") {
    this.question = question;
    
    const { body } = document;
    const modal = document.createElement('section');
    const modelContent = document.createElement('article');
    const modelText = document.createElement('h2');
    const cancelButton = document.createElement('button');
    const yesButton = document.createElement('button');

    modal.setAttribute('class', 'modal');
    modelContent.setAttribute('class', 'modal-content');
    cancelButton.setAttribute('class', 'cancel');
    yesButton.setAttribute('class', 'yes');

    cancelButton.textContent = "Cancel";
    yesButton.textContent = "Yes";
    modelText.textContent = this.question;

    modelContent.appendChild(modelText);
    modelContent.appendChild(cancelButton);
    modelContent.appendChild(yesButton);

    modal.appendChild(modelContent);
    body.appendChild(modal);
  }
  
}

export default ConfirmDialog;

