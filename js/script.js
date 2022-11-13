const div = document.querySelector(".div");
const maxWidth = window.innerWidth - div.offsetWidth;
const maxHeight = window.innerHeight - div.offsetHeight;

const ARROWS = {
  ArrowRight: moveRight,
  ArrowDown: moveDown,
  ArrowLeft: moveLeft,
  ArrowUp: moveTop,
  Space: space,
  ControlLeft: ctrl,
};

function bems() {
  div.innerHTML = "БЭМС";

  setTimeout(() => {
    div.innerHTML = "";
  }, 500);
}

function moveRight() {
  div.style.backgroundImage = "url('png/nemo-right.gif')";
  div.style.transition = "";
  div.style.left = div.offsetLeft + 20 + "px";

  if (div.offsetLeft > maxWidth) {
    div.style.left = div.offsetLeft - 100 + "px";
    bems();
  }
}

function moveDown() {
  div.style.backgroundImage = "url('png/nemo-down.gif')";
  div.style.transition = "";
  div.style.top = div.offsetTop + 20 + "px";

  if (div.offsetTop > maxHeight) {
    div.style.top = div.offsetTop - 100 + "px";
    bems();
  }
}

function moveLeft() {
  div.style.backgroundImage = "url('png/nemo-left.gif')";
  div.style.transition = "";
  div.style.left = div.offsetLeft - 20 + "px";

  if (div.style.left < 0 + "px") {
    div.style.left = div.offsetLeft + 100 + "px";
    bems();
  }
}

function moveTop() {
  div.style.backgroundImage = "url('png/nemo-up.gif')";
  div.style.transition = "";
  div.style.top = div.offsetTop - 20 + "px";

  if (div.style.top < 0 + "px") {
    div.style.top = div.offsetTop + 100 + "px";
    bems();
  }
}

function space() {
  div.style.transition = 0.3 + "s";
  div.style.top = div.offsetTop - 100 + "px";

  setTimeout(() => {
    div.style.top = div.offsetTop + 100 + "px";
  }, 200);

  if (div.style.top < 0 + "px") {
    div.style.top = div.offsetTop + 200 + "px";
    bems();
  }
}

function ctrl(e) {
  if (e.code === "ControlLeft") {
    div.style.transition = 0.1 + "s";
    div.classList.toggle("active");
  }
}

document.addEventListener("keydown", (e) => ARROWS[e.code](e));
document.addEventListener("keyup", ctrl);
