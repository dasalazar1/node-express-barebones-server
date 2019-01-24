'use strict';

module.exports = function(app) {
  app.route('/').get(function(req, res) {
    console.log('here');
    res.sendFile(process.cwd() + '/public/index.html');
  });
};
