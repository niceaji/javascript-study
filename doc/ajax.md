## javascript Ajax

* [http://javascript.dorrra.com/?doc=ajax](http://javascript.dorrra.com/?doc=ajax)
* [문서로 보기](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/ajax.md)
* [전체 목록](http://javascript.dorrra.com)

***

## Ajax

Asynchronous JavaScript and XML


***

## Hello Ajax


[예제](http://jsfiddle.net/niceaji/ExXNY/2/)

* 비동기? 동기?

## 코드

    var req = new XMLHttpRequest();

    req.open('POST', '/echo/html/', true);

    req.send("html=hello Ajax");

    req.onreadystatechange=function(){

    };

***

## 요청 응답 흐름 

![](http://i.imgur.com/pUVGkKC.jpg)

## 장점

* 새로운 기술이 필요하지 않음 (javascript, HTML, CSS)
* 부분갱신으로 로딩속도 향상(응답성 개선)
* 비동기식 접근으로 사용성 향상

## 단점

* 뒤로가기등의 사용성 저하
* 연속요구로 인한 서버 부하
* 검색 로봇 접근성
* 같은 도메인내에서만 가능

***

## IE가 문제?

[크로스브라우징](https://github.com/niceaji/jes/blob/master/src/jes.Ajax.js)

***

## 주요 API 1
[XMLHttpRequest](https://developer.mozilla.org/ko/docs/XMLHttpRequest)

* open(string method,string url,boolean asynch) 
    * HTTP 요청과 동기/비동기 통신에 따른 필요사항을 준비

* setRequestHeader(string header,string value) 
    * 요청 헤더를 설정합니다. 반드시 open( ) 메소드를 호출한 다음 사용

* onreadystatechange
    * 정의되는 콜백 함수는 readyState가 변경될 때마다 호출

* send(string) 
    * HTTP 요청을 합니다.


## 주요 API 2 

[XMLHttpRequest](https://developer.mozilla.org/ko/docs/XMLHttpRequest)


* readyState
    * 0 : uninitialized(open( ) 메소드가 호출되지 않은 상태)
    * 1 : loading(send( ) 메소드가 호출되지 않은 상태)
    * 2 : loaded(send( ) 메소드가 호출된 상태. header와 status 사용 가능)
    * 3 : interactive(reponseText에 부분적인 데이터가 저장됨)
    * 4 : completed 

* status : 응답 상태 코드
    * 200(Okay), 404(Not Found) 등

* statusText
    * 응답상태 문자열

* abort() 
    * HTTP 요청을 취소


## 주요 API 3

[XMLHttpRequest](https://developer.mozilla.org/ko/docs/XMLHttpRequest)


* responseText
    * 반환된 일반 텍스트 문자열

* responseXML
    * 반환된 XML , DOM객체

* getAllResponseHeaders() 
    * 모든 헤더 정보를 반환,문자열

* getResponseHeader(string header) 
    * 특정 헤더 값을 반환,문자열


***

## JSON

        {
            "nick" : "aji",
            "age" : 30,
            "area" :  "jeju",
            "hobby" : ["movie","walk"]
        };

* JSON (제이슨,JavaScript Object Notation) 
* is a lightweight data-interchange format


## JSON Ajax 예제

[예제](http://jsfiddle.net/niceaji/2xYG6/1/)

## 장점

* 사용하기 쉽다
* 빠른 parser
* 경량화


***

## JSONP

        callback( {
            "nick" : "aji",
            "age" : 30,
            "area" :  "jeju",
            "hobby" : ["movie","walk"]
        } )


* JSON Padding
* Ajax 크로스도메인 이슈 회피


## Open API

[Twitter Search API](https://dev.twitter.com/docs/api/1/get/search)


* [http://search.twitter.com/search.json?q=제주도](http://search.twitter.com/search.json?q=제주도)
* [http://search.twitter.com/search.json?q=제주도&callback=complate](http://search.twitter.com/search.json?q=제주도&callback=complate)

## JSONP != XMLHttpRequest 

JS동적 삽입

    var head = document.getElementsByTagName("head")[0];         
    script.type = 'text/javascript';
    var script = document.createElement('script');
    script.src = 'http://search.twitter.com/search.json?q=제주도&callback=complate';
    head.appendChild(script);

## 예제

[JSONP 예제](http://jsbin.com/esidip/1/edit)


## 장점?단점?

* 사용하기 편하다
* 크로스도메인 이슈 피함
* http 상태에 따른 디테일한 처리 불가능

***

## 크로스도메인 이슈 피하기 

* jsonp
* 서버 프록시
* 플래시 사용 (crossdomain.xml)
* [Cross-Origin Resource Sharing-CORS](http://www.w3.org/TR/cors/) 

***

## Daum Open API 사용해보기

[DNA 개발자 네트워크](http://dna.daum.net/) 


 



