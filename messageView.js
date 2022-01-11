class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const main = document.querySelector('#main-container');
    const messageEl = document.createElement('div')
    messageEl.innerText = 'This is a message displayed by Javascript'
    main.append(messageEl)
  }
}

module.exports = MessageView;

