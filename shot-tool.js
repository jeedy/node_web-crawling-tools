'use strict';

var 
    casper = require('casper').create();

var args = casper.cli.args;
if(args.length<1){
    casper.echo("USES:");
    casper.echo("casper shot-tool.js URL [savepath]");
    casper.exit();
}

var savepath = "./screenshot/tool-screenshot.png";
var url = args[0];
if(args.length >=2 ){
    savepath = "./screenshot/"+args[1];
}

casper.start();
casper.viewport(1024, 768);
casper.open(url);
casper.then(function(){
    this.capture(savepath, {
        top:0, left:0, width:1024, height:768
    });
});

casper.run();