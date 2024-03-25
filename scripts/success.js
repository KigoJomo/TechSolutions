function startCountDown(seconds) {
  var countDownElement = document.getElementById("countDownElement");
  countDownElement.textContent =
    "This window will automatically close in " + seconds + " seconds";

  var timer = setInterval(function () {
    seconds--;
    countDownElement.textContent =
      "This window will automatically close in " + seconds + " seconds";
    if (seconds <= 0) {
      clearInterval(timer);
      window.close();
    }
  }, 1000);
}

window.onload = function () {
  startCountDown(15);
};
