'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#turn').text(newText)
}

const failureMessage = function (newText) {
  $('#turn').text(newText)
}

const errorMessage = function (newText) {
  $('#error-message').text(newText)
}

const onStartGameSuccess = function (gameData) {
  clearGameBoard()
  successMessage('Turn: Player x')
  store.game = gameData.game
  store.turn = 'x'
}

const onStartGameFailure = function () {
  failureMessage('failed to display game')
}

const clearGameBoard = function () {
  $('.box').text('')
}

const onTurnSuccess = function (gameData) {
  store.game = gameData.game
  for (let i = 0; i < store.game.cells.length; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
  checkWin()

  if (store.turn === 'x') {
    store.turn = 'o'
  } else {
    store.turn = 'x'
  }

  successMessage('Turn: Player ' + store.turn)
}

const onTurnFailure = function (gameData) {
  failureMessage('Failed to change turn')
}

const checkWin = function () {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    errorMessage('Winner is: ' + store.game.cells[0])
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    errorMessage('Winner is: ' + store.game.cells[3])
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    errorMessage('Winner is: ' + store.game.cells[6])
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    errorMessage('Winner is: ' + store.game.cells[0])
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    errorMessage('Winner is: ' + store.game.cells[1])
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    errorMessage('Winner is: ' + store.game.cells[2])
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    errorMessage('Winner is: ' + store.game.cells[0])
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    errorMessage('Winner is: ' + store.game.cells[2])
  }
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onTurnSuccess,
  onTurnFailure,
  errorMessage
}
