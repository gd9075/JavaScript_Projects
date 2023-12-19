const pianoKeys = document.querySelectorAll(".piano-keys .key"),
valumeSlider = document.querySelector(".valume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let audio= new Audio("tunes/A.mp3");
const playTune= (key) =>{
      audio.src =`tunes/${key}.mp3`;
      audio.play();
}
pianoKeys.forEach(key =>{
    key.addEventListener("click", () => playTune(key.dataset.key))

})
const handleVolume = (e) =>{
    audio.volume=e.target.value
}
const showHiddenKeys =() =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
valumeSlider.addEventListener("input", handleVolume)
keysCheckbox.addEventListener("click", showHiddenKeys)