console.log("Welcome to Spotify!");

// Initializing the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3'); // Corrected path
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
    { songName: "Venom", filepath: "1.mp3", coverPath: "venom.jpg" },
];

// Handle Play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// Update progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Allow seeking through the progress bar
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});
