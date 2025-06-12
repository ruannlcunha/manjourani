
export function useMusic() {
    const volumeMusica = 0.1

    function startMusic(loop) {
      const audioContext = new AudioContext();

      const audioElement = document.querySelector("audio");
      audioElement.volume = volumeMusica
      audioElement.loop = loop

      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
      audioElement.play();
    }

    function restartMusic(novoVolume) {
      const audioElement = document.querySelector("audio");
      audioElement.pause();
      audioElement.volume = novoVolume/10;
      audioElement.play();
    }

    return { restartMusic, startMusic }

}