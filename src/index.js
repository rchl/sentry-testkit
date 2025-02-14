'use strict'

const { createTestkit } = require('./testkit')
const { createLocalServerApi } = require('./localServerApi')
const { createInitNetworkInterceptor } = require('./initNetworkInterceptor')
const { createSentryTransport } = require('./sentryTransport')

module.exports = () => {
  const testkit = createTestkit()
  const sentryTransport = createSentryTransport(testkit)
  const initNetworkInterceptor = createInitNetworkInterceptor(testkit)
  const localServer = createLocalServerApi(testkit)

  return {
    sentryTransport,
    testkit,
    initNetworkInterceptor,
    localServer,
  }
}
