var page = require('page');
var empty = require('empty-element');
var title = require('title');
var request = require('superagent');
var templateHead = require('./templateHead');
var templateBody = require('./templateBody');
var account = require('../layout/account');
var header = require('../header');

page('/user/:username', header, function(ctx) {
  title('Platzi - Username');
  var main = document.getElementById('main-container');
  empty(main).appendChild(account(templateHead(ctx.params.username), templateBody()));
})
