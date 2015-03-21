var updateNotifier = require('update-notifier');
var argv = require('optimin')(process.argv.slice(2), {
  version: {
    alias: 'v',
    boolean: true
  },
  login: {
    alias: 'in',
  },
  help: {
    alias: 'h',
  },
  logout: {
    alias: 'out'
  }
});
var qiite = require('./main');
var pkg = require(__dirname + '/../package.json');

updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify();

if (argv.version) {
  qiite.version();
  return;
}
