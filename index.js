const soundFolder = "sounds/";

const soundFiles = [
  { key: "q", sound: "clap.wav", soundName: "Clap", },
  { key: "w", sound: "hihat.wav", soundName: "Hihat", },
  { key: "e", sound: "kick.wav", soundName: "Kick",  },
  { key: "r", sound: "openhat.wav", soundName: "Openhat", },
  { key: "t", sound: "ride.wav", soundName: "Ride"},
  { key: "y", sound: "snare.wav", soundName: "Snare"},
  { key: "u", sound: "tink.wav", soundName: "Tink",  },
  { key: "i", sound: "tom.wav", soundName: "Tom", },
];



const drumKitContainer = document.getElementById("drumkit");

function drum(folder, fileInfo) {
  const button = document.createElement("button");
  button.textContent = fileInfo.soundName;
  button.classList.add("button");

  const drumSound = new Audio(folder + fileInfo.sound);

  button.addEventListener("click", () => PlaySound(drumSound));

  return button;
}

const drumkitElements = soundFiles.map((soundInfo) =>
  drum(soundFolder, soundInfo)
);

drumKitContainer.append(...drumkitElements);

window.addEventListener("keydown", (event) => {
  const soundfile = soundFiles.find((soundInfo) => soundInfo.key === event.key);

  if (!soundfile) return;

  const drumSound = new Audio(soundFolder + soundfile.sound);
  PlaySound(drumSound);
});

function PlaySound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.pause();
  audioElement.play();
}
