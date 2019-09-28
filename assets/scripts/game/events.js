'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onStartGame = function () {
  const game = event.target
  const gameData = getFormFields(game)
  api.startGame(gameData)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

module.exports = {
  onStartGame
}
