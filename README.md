# node_web-crawling-tools
PhantomJS, CasperJS and Electron

Chapter 3. 로그인이 필요한 웹사이트 크롤링 - 웹 크롤링 테크닉
============
1. 이미지 캡쳐 - PhantomJS, CasperJS
1. 로그인 후의 데이터를 다운로드

## 오류 정정
1. page 11 `login.js` - 소스 20번째줄 두번째 casper.then() 사용할 경우(*책 내용) 로그인 이후 리다이렉트로 인해 바로 데이터를 읽어 들이지 못하는 버그가 발생한다. 해당 메소드는 casper.waitForSelector()로 대체 한다.

## 사용된 라이브러리
> - PhantomJS : 커맨드라인으로 사용할 수 있는 브라우저 : [http://phantomjs.org/]
> - CasperJS : phantomJS 를 쉽게 사용하기 위한 라이브러리 : [http://casperjs.org/]

## 설치
### PhantomJS 설치
$ npm install -g phantomjs

### CasperJS  설치
$ npm install -g casperjs

### npm 에 설치된 패키지 확인
$ npm list -g [패키지명]