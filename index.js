function onChatBotReady() {

  // You have to define HTML meta "bs:input:buttonName" in order to inform bot send data to buttonName parameter webview
  var btnName = BotStarWebview('getParameter', 'buttonName');

  var btn = document.getElementById('btn');
  if (btnName) {
    btn.appendChild(document.createTextNode(btnName));
    btn.style.display = 'inline-block';
  }
  
function sendResponse() {
  event.preventDefault();
  console.log("Button Click and your work")
  setTimeout(() => {
    BotStarWebview('sendResponse', "", {}, 'Button Clicked').catch((err) => {
      console.log(err);
    });
  }, 0);
}

