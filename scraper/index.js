'use strict';

const fs = require('fs'),
  dl = require('youtube-dl'),
  url = 'https://www.youtube.com/watch?v=',
  base = 'downloads/';

module.exports = function scraper(options) {
  var video = dl(
    `${url}${options.id}`, [
      '--format=18'
    ], {
      cwd: __dirname
    });
  video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info._filename);
    console.log('size: ' + info.size);
  });

  video.pipe(fs.createWriteStream(`${base}${options.out}`));

};
