'use strict';

var casper = require('casper').create();

casper.start();

casper.open('http://jpub.tistory.com');

casper.then(function(){
    casper.capture('./screenshot/screenshot.png');
});

casper.run();