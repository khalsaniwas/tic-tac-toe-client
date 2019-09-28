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
