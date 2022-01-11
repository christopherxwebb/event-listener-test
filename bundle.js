(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          const main = document.querySelector("#main-container");
          let messageEl = document.createElement("div");
          messageEl.setAttribute("id", "Div1");
          messageEl.innerText = "This is a message displayed by Javascript";
          main.append(messageEl);
        }
        hideMessage() {
          console.log("Thanks for clicking hide button!");
          const main = document.querySelector("#main-container");
          let messageEl = document.getElementById("Div1");
          messageEl.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
