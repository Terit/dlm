const app = require('koa')();
const router = require('koa-router')();
const logger = require('koa-logger');
const moviesController = require('./movies');
const path = require('path');

// Logging
app.use(logger());

router.get('/:name', moviesController.actorId);
router.get('/', moviesController.actorId);
app.use(router.routes());

app.on('error', function(err){
  log.error('server error', err);
});

app.listen((process.env.PORT || 5000), () => process.stdout.write('Server running'));
