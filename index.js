function onChatBotReady() {
  var btnName = BotStarWebview('getParameter', 'buttonName');

  var btn = document.getElementById('btn');
  if (btnName) {
    btn.appendChild(document.createTextNode(btnName));
    btn.style.display = 'inline-block';
  }

}

function sendResponse() {
  event.preventDefault();

  BotStarWebview('sendResponse', "", {}, 'Button Clicked').catch((err) => {
      console.log(err);
   });
}
