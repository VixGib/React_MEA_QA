import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti()

export default function addConfetti ({text}) {
    return(
        jsConfetti.addConfetti({
            emojis: [text],
            confettiNumber: 12,
            emojiSize: 50,
        })

    )
}