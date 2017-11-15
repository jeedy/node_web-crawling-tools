'use strict';

var TARGET_URL = 'http://jpub.tistory.com';

var casper = require('casper').create();
casper.start();

casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; ko-kr) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16');

casper.viewport(750, 1334);

casper.open(TARGET_URL);

casper.then(function(){
    this.capture('./screenshot/screenshotoniphone.png');
});

casper.run();