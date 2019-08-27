module.exports = {
    modules: [{
      name: '测试环境',
      env: 'test',
      ssh: {
        host: 'xxxx',
        username: 'ubuntu',
        // rc版本的user选项和userName选项请在未来统一配置为username
        // privateKey为认证在服务器的公钥对应的私钥地址，请灵活变通
        privateKey: require('fs').readFileSync('/Users/yangtao/.ssh/id_rsa1.pem') // mac用户举例
      },
      buildCommand: 'build',
      localPath: '/Users/yangtao/Desktop/project/web_goldeneye_server',
      localPathEntries: ['templates', 'static'],
      localTarFileDir: './vue',
      tarFilename: 'template_test',
      remotePath: '/opt/console/console',
      remoteTarFileDir: '/opt/console/console',
      nobackup: true,
      buildUrl: '/Users/yangtao/Desktop/project/web_goldeneye_server/dock_console_web/goldeneye_vue'
    }]
  }
  