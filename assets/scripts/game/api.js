'use strict'

const config = require('../config.js')
const store = require('../store.js')

const startGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: '{}',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  startGame
}