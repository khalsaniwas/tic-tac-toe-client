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
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

const showElement = function (selector) {
  $(selector).removeClass('d-none')
}

const hideElement = function (selector) {
  $(selector).addClass('d-none')
}

const onSignInSuccess = function (formData) {
  store.user = formData.user
  successMessage('Signed in successfully')
  $('#game').removeClass('invisible')
  $('#game').addClass('visible')
  hideElement('#sign-up-container')
  showElement('#sign-out-container')
  showElement('#change-password-container')
  hideElement('#sign-in-container')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully')
  $('#game').removeClass('visible')
  $('#game').addClass('invisible')
  showElement('#sign-up-container')
  showElement('#sign-in-container')
  hideElement('#game')
  hideElement('#change-password-container')
  hideElement('#sign-out-container')
  $('#sign-in').trigger('reset')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Password change successful')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change unsuccessful')
  $('#change-password').trigger('reset')
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
