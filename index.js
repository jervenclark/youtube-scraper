'use strict';

const scraper = require('./scraper'),
  argv = require('minimist')(process.argv.slice(2));

if (argv.id) {
  scraper({
    id: argv.id,
    out: argv.out ? argv.out : argv.id
  })
} else {
  console.error('Scraper requires video id.');
}
