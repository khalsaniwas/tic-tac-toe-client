'use strict'
const store = require('../store')
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-warning')
  $('#message').addClass('alert-success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-warning')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
}

const showElement = function (selector) {
  $(selector).removeClass('d-none')
}

const onSignInSuccess = function (formData) {
  store.user = formData.user
  successMessage('Signed in successfully')
  $('#game').removeClass('invisible')
  $('#game').addClass('visible')
  $('#sign-up-container').addClass('d-none')
  showElement('#sign-out-container')
  showElement('#change-password-container')
  $('#sign-in-container').addClass('d-none')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully')
  $('#game').removeClass('visible')
  $('#game').addClass('invisible')
  showElement('#sign-up-container')
  showElement('#sign-in-container')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Password change successful')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change unsuccessful')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
