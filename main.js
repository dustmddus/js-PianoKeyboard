const pianoWhiteKey = document.querySelectorAll(".piano-key-white");
const pianoBlackKey = document.querySelectorAll(".piano-key-black");

function clickPiano() {
  pianoWhiteKey.forEach((key) => {
    key.addEventListener("click", function (event) {
      let audio = key.querySelector("audio");
      var music = new Audio();
      music.src = audio.src;
      music.play();
    });
  });
  pianoBlackKey.forEach((key) => {
    key.addEventListener("click", function (event) {
      let audio = key.querySelector("audio");
      var music = new Audio();
      music.src = audio.src;
      music.play();
    });
  });
}

function keyBoardPiano(e) {
  const key = document.querySelector(`[data-key='${e.keyCode}']`);
  let audio = key.querySelector("audio");
  var music = new Audio();
  music.src = audio.src;
  music.play();
  key.classList.add("active");
  setTimeout(function () {
    key.classList.remove("active");
  });
}

clickPiano();
window.addEventListener("keydown", keyBoardPiano);
