// 项目根目录下test.js
const Fjpublish = require('./lib')
// const prompt = require('Fjpublish/lib/fjpublish_prompt.js')
const builder = require('./lib/fjpublish_builder.js')
const compress = require('./lib/fjpublish_compress.js')
const sftp = require('./lib/fjpublish_sftp.js')
const shell = require('./lib/fjpublish_shell.js')
const config = require('./fjpublish.config.js')
// console.log('config', require('fs').readFileSync('/Users/yangtao/.ssh/id_rsa1.pem'))

Fjpublish(config)
//   .use(prompt)
//   .use(test)
  .use(builder)
  .use(compress)
  .use(sftp)
  .use(shell)
  .start()

function test(module, env, next) {
  console.log('我正在发布' + env + '环境')
  next()
}
// var Client = require('ssh2').Client

// var conn = new Client()
// conn.on('ready', function() {
//   console.log('Client :: ready')
//   conn.exec('uptime', function(err, stream) {
//     if (err) throw err
//     stream.on('close', function(code, signal) {
//       console.log('Stream :: close :: code: ' + code + ', signal: ' + signal)
//       conn.end()
//     }).on('data', function(data) {
//       console.log('STDOUT: ' + data)
//     }).stderr.on('data', function(data) {
//       console.log('STDERR: ' + data)
//     })
//   })
// }).connect({
//   host: '3.88.189.221',
//   username: 'root',
//   privateKey: require('fs').readFileSync('/Users/yangtao/.ssh/id_rsa1.pem')
// })

// conn.on('ready', function() {
//   console.log('Client :: ready')
//   conn.shell(function(err, stream) {
//     if (err) throw err
//     stream.on('close', function() {
//       console.log('Stream :: close')
//       conn.end()
//     }).on('data', function(data) {
//       console.log('OUTPUT: ' + data)
//     })
//     stream.end('ls -l\nexit\n')
//   })
// }).connect({
//   host: '3.88.189.221',
//   username: 'ubuntu',
//   privateKey: require('fs').readFileSync('/Users/yangtao/.ssh/id_rsa1.pem')
// })
