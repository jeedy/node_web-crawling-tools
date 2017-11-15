'use strict';

var casper = require('casper').create();

casper.start();

casper.viewport(1400, 800);
casper.userAgent('User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36');

var text = encodeURIComponent("고양이");
casper.open('https://www.flickr.com/search/?text='+text);

casper.then(function(){
    this.capture('./screenshot/flickr-cat.png', {
        top:0, left: 0, width: 1400, height: 800
    });
});

casper.run();