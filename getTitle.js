"use strict";

var casper = require('casper').create();

var TARGET_URL = 'http://jpub.tistory.com';

casper.start(TARGET_URL, function(){
    this.echo(casper.getTitle());
});

casper.run();