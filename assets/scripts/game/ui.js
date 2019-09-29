'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#turn').text(newText)
}

const failureMessage = function (newText) {
  $('#turn').text(newText)
}

const onStartGameSuccess = function (gameData) {
  clearGameBoard()
  successMessage('Turn: Player x')
  store.game = gameData.game
  store.turn = 'x'
  console.log(gameData)
  console.log('store Data', store)
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

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onTurnSuccess,
  onTurnFailure
}
