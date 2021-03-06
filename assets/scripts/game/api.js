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

const turn = function (boxId, gameId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${gameId}`,
    data: {
      'game': {
        'cell': {
          'index': boxId,
          'value': store.turn
        },
        'over': false
      }
    },
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getCount = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  startGame,
  turn,
  getCount
}
