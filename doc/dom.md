## javascript & DOM & Event

* [http://javascript.dorrra.com/?doc=dom](http://javascript.dorrra.com/?doc=dom)
* [문서로 보기](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/dom.md)
* [전체 목록](http://javascript.dorrra.com)

***

## DOM-Document Object Model

* HTML과 XML 문서에 대한 프로그래밍 인터페이스
* 문서를 구성하는 객체에 어떻게 접근할 것인가를 정의하는 API

## BOM-Browser Object Model

![bom](http://i.imgur.com/Tk8RmJl.png)

* 클라이언트 측 계층 구조와 레벨 0 DOM
* 브라우저마다 차이

## DOM 레벨

1. DOM 레벨1 - 1998년
1. DOM 레벨2 - 2000년
1. DOM 레벨3 - 2004년

## 프론트엔드 웹 개발?

DOM을 다이나믹하게 조작하는 일들

* 데이터 동적 로딩
* UI 개발
* 폼값 검증

사용자의 브라우징 경험 증대

*** 

## window

    window.outerWidth

    window.name

    window.open('http://www.daum.net');

    window.opener

    window.close();

가장 최상위 객체

## location

    location.href='http://www.daum.net';

    location.reload();

url에 대한 정보

## history

    history.back();

    history.go(1);

브라우저 history 정보

## screen

    screen.width

    screen.availWidth
        
화면에 대한 정보


## navigator

    navigator.userAgent

    navigator.language

    navigator.platform

브라우저 정보

## document

    document.getElementById('debug');
    document.write("hello");
    document.body
    document.cookie
    document.domain
    document.referrer
    document.title

문서에 대한 정보

*** 

## DOM 레벨0

    document.forms[1]

    document.images

비권장

## W3C DOM

![dom](http://i.imgur.com/kHfGkqL.png)

노드, 자식(children), 부모(parent), 형제(sibling)


## DOM 메소드

    document.getElementById()
    document.querySelectorAll()
    document.getElementsByName()
    document.createElement()
    document.appendChild()

## 찾기 - querySelectorAll()

    $$('#header')
    $$('a img')     
    $$('.daumhide').length
    $$('form[name=daumSearch]')

    var all = $$('ul');
    var length = all.length;
    for(var i=0; i < length; i++){
        all[i].style.border = '1px solid red';
    }

* [Daum](http://daum.net)에서 테스트 
* HTMLCollection 형태로 리턴 
* [참고](http://api.jquery.com/category/selectors/)

##  만들고 넣기-createElement()

    var div = document.createElement('div');
    div.style.border = "1px solid red";
    div.innerHTML = "hello!!";
    document.body.appendChild(div);

## innerHTML

* IE4에서 처음 구현된 비표준 
* createElement(), appendChild()보다 편리 
* 모든 브라우저에서 구현

## DOM은 느리다?

* [innerHTML VS dom](http://goo.gl/MO7S0)
* 오래된 브라우저에서는 느리다

***

## html에 코드 삽입 

    <html>
    <head>
        <title>코드 삽입</title>
        <script type="text/javascript">
        function test(){

        }
        <//script>
    </head>
    <body>
    </body>
    </html>

## js 파일로 넣기  


    <html>
    <head>
        <title>js 파일로 삽입</title>
    </head>
    <body>

        <script type="text/javascript" src="test.js"><//script>

    </body>
    </html>

로딩속도의 보장을 위해서 하단에서 호출 권장

## 동적 삽입

    var head = document.getElementsByTagName("head")[0];         
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'test.js';
    head.appendChild(script);

## 실제 서비스에선?

* [미디어다음 소스보기](view-source:http://media.daum.net/)


***

## Event

* 문서에서 Element에 변화가 생기면서 발생하는 모든 사건 
* 이벤트타입:click, mouseover, load, mouseout, unload, change,submit, focus, blur, error, keypress,DOMContentLoaded,touchstart ..
* [Mozilla event reference](https://developer.mozilla.org/en/DOM/DOM_event_reference)

## Event 등록 방법

    //인라인 
    <body onload="alert(1)">

    //프로퍼티로 주기 
    window.load=function(){
        alert("load");
    };

    //DOM 레벨2
    window.addEventListener('load', function(){
        alert("load");
    });

* DOM 레벨2 권장
* IE에서는 독자적인 모델 구현
* [크로스브라우징 구현](http://jsfiddle.net/niceaji/kcbke/)

## 이벤트 등록,제거

* [addEventListener()](https://developer.mozilla.org/en/DOM/element.addEventListener)
* [removeEventListener()](https://developer.mozilla.org/en/DOM/element.removeEventListener)

## Methods, Properties

* [메소드](https://developer.mozilla.org/en-US/docs/DOM/event#Methods)
* [프로퍼티](https://developer.mozilla.org/en-US/docs/DOM/event#Properties)


## Callback 함수


    var clickCount = 0;
    function popup(event){
        console.log(++clickCount);
        console.log(arguments, this ,event ,event.type,event.currentTarget);
    }
    document.body.addEventListener('click', popup);

    document.body.addEventListener('click', function(){
        console.log("click");
    });
    
* 특정 동작(이벤트)등이 완료후에 발생하는 함수
* this, event.currentTarget : 이벤트 처리기가 등록된 객체

## 이벤트 전파

![](http://i.imgur.com/yFv5hSy.png)

* 캡쳐,버블 
* [예제](http://jsfiddle.net/niceaji/Ve9zd/)

## 이벤트 전파 중지

    event.stopPropagation(); // 이벤트 전파 중지 

    event.preventDefault(); // 기본 행동 중지 

* [예제](http://jsfiddle.net/niceaji/FHmBE/)





