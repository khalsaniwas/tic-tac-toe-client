'use strict'

const successMessage = function (newText) {
  $('#turn').text(newText)
}

const failureMessage = function (newText) {
  $('#turn').text(newText)
}

const onStartGameSuccess = function (gameData) {
  clearGameBoard()
  successMessage('Turn: Player X')
}

const onStartGameFailure = function () {
  failureMessage('failed to display game')
}

const clearGameBoard = function () {
  $('.box').text('')
}
module.exports = {
  onStartGameSuccess,
  onStartGameFailure
}
