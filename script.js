const tracks = {
  Crystal: "./works/Crystal_Cut.mp3",
  Ghostly: "./works/Ghostly_Cut.mp3",
  Gravity: "./works/Gravity_Cut.mp3",
  Infinito: "./works/Infinite_Cut.mp3",
  Loneliness: "./works/Loneliness_Cut.mp3"
};

let currentTrack = null;

function playTrack(name, el) {
  // Si ya está activo, detener
  if (currentTrack && !currentTrack.paused && el.classList.contains("active")) {
    currentTrack.pause();
    currentTrack.currentTime = 0;
    el.classList.remove("active");
    return;
  }

  if (currentTrack) {
    currentTrack.pause();
    currentTrack.currentTime = 0;
  }

  document.querySelectorAll(".pad").forEach(p => p.classList.remove("active"));
  el.classList.add("active");

  currentTrack = new Audio(tracks[name]);
  currentTrack.play();
}

function playNote(el, note) {
  el.classList.add("active");
  showNoteLabel(note);
  setTimeout(() => el.classList.remove("active"), 150);
  const audio = new Audio(`./sounds/${note}.mp3`);
  audio.play(0);
}

function showNoteLabel(note) {
  const label = document.createElement("div");
  label.textContent = note;
  label.className = "note-label";
  document.body.appendChild(label);
  setTimeout(() => label.remove(), 500);
}