'use strict';

var casper = require('casper').create({verbose:true, logLevel: "debug"});

var url = 'http://iamnotokay.tistory.com/admin/center/';
var id = "kk59491@gmail.com";
var password = "tistorycypre@@";

casper.start();
casper.open(url);

casper.then(function(){
    this.fill("#authForm", {
        loginId: id,
        password: password
    }, true);
});

// 로그인시에 리다이렉트(redirect)가 발생되므로 찾고자 하는 selector 가 나올때 까지 WaitFor 한다.
casper.waitForSelector("#mArticle .count_visitor:nth-child(1) > dd",function(){
    var getComment = function(){
        return document.querySelector("#mArticle .count_visitor:nth-child(1) > dd").innerText;
    };
    console.log("오늘 방문자 수: "+this.evaluate(getComment));
});

casper.then(function(){
    var getGuestBook = function(){
        return document.querySelector("#mArticle .count_visitor:nth-child(2) > dd").innerText;
    };
    console.log("어제 방문자수: "+this.evaluate(getGuestBook));
});

casper.run();