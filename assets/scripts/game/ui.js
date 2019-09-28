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
  successMessage('Turn: Player X')
  store.game = gameData.game
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
  successMessage('Turn: Player O')
  store.game = gameData.game
  for (let i = 0; i < store.game.cells.length; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
  console.log(gameData)
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
