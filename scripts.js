const result = document.querySelector(".result")
const yourScore = document.querySelector(".your-score")
const machineScore = document.querySelector(".machine-score")

let yourScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoince) => {

    playTheGame(humanChoince, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 2)

    return choices[randomNumber]
}

const playTheGame = (humanChoince, playMachine) => {

    console.log('Humano: ' + humanChoince + " Maquina: " + playMachine)

    if (humanChoince === playMachine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (humanChoince === 'paper' && playMachine === 'rock') ||
        (humanChoince === 'rock' && playMachine === 'scissors') ||
        (humanChoince === 'scissors' && playMachine === 'paper')
    ) {
        yourScoreNumber++
        yourScore.innerHTML = yourScoreNumber
        result.innerHTML = 'Voçê ganhou!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Voçê perdeu!'
    }

}

