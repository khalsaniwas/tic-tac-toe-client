'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onStartGame = function () {
  const game = event.target
  const gameData = getFormFields(game)
  api.startGame(gameData)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const onTurn = function () {
  const box = event.target

  if (store.game.over === true) {
    ui.errorMessage('Game over - Press "Start Game" to play again.')
    return
  } else if (store.game.cells[box.id] !== '') {
    ui.errorMessage('Wrong move')
    return
  } else {
    ui.errorMessage('')
  }

  api.turn(box.id, store.game.id)
    .then(ui.onTurnSuccess)
    .catch(ui.onTurnFailure)
}

const onGetCount = function (event) {
  event.preventDefault()
  api.getCount()
    .then(ui.onGetCountSuccess)
    .catch(ui.onGetCountFailure)
}

module.exports = {
  onStartGame,
  onTurn,
  onGetCount
}
