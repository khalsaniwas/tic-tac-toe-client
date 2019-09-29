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
  console.log(box.id)
  console.log(store.game.id)
  api.turn(box.id, store.game.id)
    .then(ui.onTurnSuccess)
    .catch(ui.onTurnFailure)
}

module.exports = {
  onStartGame,
  onTurn
}
