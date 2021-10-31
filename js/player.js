const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const btnToggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranger = player.querySelectorAll(".player__slider");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

let mouseDown = false;

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

video.addEventListener("click", togglePlay);
btnToggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);

function updateBtn() {
  const icon = this.paused ? "▶" : "❚ ❚";
  btnToggle.textContent = icon;
}

skipButtons.forEach((btn) => btn.addEventListener("click", skip));

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

ranger.forEach((input) => input.addEventListener("input", handleChangeUpdate));

function handleChangeUpdate() {
  video[this.name] = this.value;
}

progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mousemove", (event) => mouseDown && scrub(event));
progress.addEventListener("click", scrub);

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  console.log("offsetX", event.offsetX);
  console.log("offsetWidth", progress.offsetWidth);
  console.log("duration", video.duration);

  video.currentTime = scrubTime;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener("timeupdate", handleProgress);
