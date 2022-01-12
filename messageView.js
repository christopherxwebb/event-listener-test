class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.inputEl = document.querySelector('#message-input');

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const main = document.querySelector('#main-container');
    let messageEl = document.createElement('div');
    messageEl.id = "message";
    messageEl.innerText = this.inputEl.value;
    main.append(messageEl);
  }
  hideMessage() {
    const main = document.querySelector('#main-container');
    let messageEl = document.getElementById("message");
    messageEl.remove();
  }
}

module.exports = MessageView;

