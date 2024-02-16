
    var audio = new Audio('images/Hertzium - Machine Learning.mp3'); // Replace 'path/to/your/sound.mp3' with the path to your sound file
    audio.loop = true; // Set loop property to true to repeat the sound

    function playSound() {
      audio.play();
    }

    function stopSound() {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }
 
