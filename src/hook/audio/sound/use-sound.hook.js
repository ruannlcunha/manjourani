
export function useSound() {
    const volumeEfeitos = 5

    function playSound(audio) {
        const novoAudio = new Audio(audio)
        novoAudio.volume = volumeEfeitos
        novoAudio.play()
    }


    return {
        playSound,
    }

}