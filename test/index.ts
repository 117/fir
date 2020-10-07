import ava from 'ava'
import fs from 'fs'
import fir from '../src'

fir.setOptions({
  wipeOnRun: true,
  appendToFile: 'latest.log',
  formatter: (message) => `[Test] ${message}`,
})

ava('log', async function (test) {
  fir.log('test')
  fs.unlinkSync(fir.getOptions().appendToFile)
  test.pass()
})
