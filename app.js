const cluster = require('cluster');
const os = require('os');
const appWorker = require('./app-worker');

const workers = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < workers; i += 1) {
    cluster.fork();
  }
} else {
  appWorker();
}
