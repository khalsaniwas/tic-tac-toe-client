'use strict'

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
