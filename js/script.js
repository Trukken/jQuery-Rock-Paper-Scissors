let xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    let country = JSON.parse(xhttp.responseText).country_name
    if (country == 'Hungary') {
      alert('Jani egy fasz')
    }else if (country != 'Hungary') {
      alert('Hey, this is a rock, paper, scissors game. Have fun.')
    }
  }
}
xhttp.open('GET', 'https://ipapi.co/json/', true)
xhttp.send()

// 1 - I click on an icon
// const myAlt = event.target.alt
// 2 - show my choice
// 2 plus - Disable the event listener
// 3 - Computer choose an option
// 4 - Computer show the option
// 5 - compare the choices to tell the winner

// Math time !!!

const looser = 'Looser'
const winner = 'Winner'
const draw = 'Draw'

const initialStone = $('#stonePlayer')
const initialPaper = $('#paperPlayer')
const initialScissors = $('#scissorsPlayer')

const userStone = $('#userPierre')
const userPaper = $('#userFeuille')
const userScissors = $('#userCiseaux')

const cpuStone = $('#compPierre')
const cpuPaper = $('#compFeuille')
const cpuScissors = $('#compCiseaux')

const playGaem = $('#playGame')
const playAgain = $('#playAgain')

const statusDisplay = $('#status')

let playerNumber

let isItInGame = false

initialStone.on('click', v => {
  userStone.css('display', 'initial')
  userPaper.css('display', 'none')
  userScissors.css('display', 'none')
  playGaem.css('display', 'initial')
  statusDisplay.css('display', 'none')
  playerNumber = 1
  check()
})

initialPaper.on('click', v => {
  userStone.css('display', 'none')
  userPaper.css('display', 'initial')
  userScissors.css('display', 'none')
  playGaem.css('display', 'initial')
  statusDisplay.css('display', 'none')
  playerNumber = 2
  check()
})

initialScissors.on('click', v => {
  userStone.css('display', 'none')
  userPaper.css('display', 'none')
  userScissors.css('display', 'initial')
  statusDisplay.css('display', 'none')
  playerNumber = 3
  check()
})
/* Same as:
function computer(){

} */

function check () {
  console.log(isItInGame)
  if (isItInGame) {
    playGaem.css('display', 'none')
  } else {
    playGaem.css('display', 'initial')
  }
}

playGaem.on('click', computer)
let cpuNumber

function computer () {
  playGaem.css('display', 'none')
  playAgain.css('display', 'none')
  cpuNumber = Math.floor((Math.random() * 3) + 1)
  console.log(cpuNumber)
  switch (cpuNumber) {
    case 1:
      cpuStone.css('display', 'initial')
      cpuPaper.css('display', 'none')
      cpuScissors.css('display', 'none')
      break
    case 2:
      cpuStone.css('display', 'none')
      cpuPaper.css('display', 'initial')
      cpuScissors.css('display', 'none')
      break
    case 3:
      cpuStone.css('display', 'none')
      cpuPaper.css('display', 'none')
      cpuScissors.css('display', 'initial')
      break
  }
  displayStatus()
  playAgain.css('display', 'initial')
  isItInGame = true
}

playAgain.on('click', computer)

function displayStatus () {
  statusDisplay.css('display', 'initial')
  statusDisplay.css('position', 'absolute')
  statusDisplay.css('z-index', '1')
  statusDisplay.css('top', '20%')
  statusDisplay.css('left', '70%')
  statusDisplay.css('backgroundColor', 'green')
  statusDisplay.css('color', 'white')
  statusDisplay.css('transform', 'rotate(-20deg)')
  statusDisplay.css('padding', '10% 20%')
  statusDisplay.css('border-radius', '5px')
  console.log(playerNumber, cpuNumber)
  if (playerNumber == 1 && cpuNumber == 2) {
    statusDisplay.text(looser)
  } else if (playerNumber == 1 && cpuNumber == 3) {
    statusDisplay.text(winner)
  } else if (playerNumber == cpuNumber) {
    statusDisplay.text(draw)
  }
  if (playerNumber == 2 && cpuNumber == 1) {
    statusDisplay.text(winner)
  } else if (playerNumber == 2 && cpuNumber == 3) {
    statusDisplay.text(looser)
  } else if (playerNumber == cpuNumber) {
    statusDisplay.text(draw)
  }

  if (playerNumber == 3 && cpuNumber == 1) {
    statusDisplay.text(looser)
  } else if (playerNumber == 3 && cpuNumber == 2) {
    statusDisplay.text(winner)
  } else if (playerNumber == cpuNumber) {
    statusDisplay.text(draw)
  }
}
