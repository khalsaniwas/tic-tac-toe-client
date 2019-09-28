'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#displayGame').text(newText)
  $('#displayGame').removeClass('alert-warning')
  $('#displayGame').addClass('alert-success')
}

const failureMessage = function (newText) {
  $('#displayGame').text(newText)
  $('#displayGame').removeClass('alert-success')
  $('#displayGame').addClass('alert-warning')
}

const onDisplayGameSuccess = function (gameData) {
  store.user = gameData.user
  successMessage('Start playing the game')
}

const onDisplayGameFailure = function () {
  failureMessage('failed to display game')
}

module.exports = {
  onDisplayGameSuccess,
  onDisplayGameFailure
}
