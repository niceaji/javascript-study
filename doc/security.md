## javascript 보안

* [http://niceaji.github.com/javascript-study/?doc=security](http://niceaji.github.com/javascript-study/?doc=security)
* [문서로 보기](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/security.md)
* [Source](https://github.com/niceaji/javascript-study)

***

## 제한

* 악의적인 코드로 사생활 침해등을 막기위해 실행에 제약
* 특정 기능을 지원하지 않거나 제한 (클립보드,..)
* 사용자 컴퓨터 파일 접근 금지 

## 새 창(popup)

* window.open() 은 사용자가 클릭을 하는경우에만 가능
* 너무 작은창 (100X100 이하), 화면 밖에 창은 생성 불가

## 창 닫기

* window.close() 는 window.open()으로 open한 창만 가능 
* 사용자가 직접 연창은 사용자의 동의 필요

## 동일 근원 정책

* same-origin policy 
* 자신이 포함된 문서와 출처가 동일한 
* 문서의 창 프로퍼티만 설정가능 
* iframe이거나 다른 윈도우가 있을경우 적용 

## document.domain 으로 완화 

    document.domain = 'daum.net';

* 2차도메인 문제 해결 

## input type=file

* value 설정 금지

## history 객체

* 사이트 정보 읽기 불가능


## 크로스사이트 스크립팅(XSS)

게시판등에 스크립트를 삽입하여 사용자가 원치않는 행동 유도 

* [위키](http://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85)
* [Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)

***

## 약점? 장점?

* 공개된 소스 

## 소스 보안?

* [packer](http://dean.edwards.name/packer/)
* [YUI Compressor](http://yui.github.com/yuicompressor/)
* [UglifyJS](https://github.com/mishoo/UglifyJS)

로딩 속도 개선 주요 목적 

## 소스 정렬

* [JS Beautifier](http://jsbeautifier.org/)
* [Sight](https://chrome.google.com/webstore/detail/sight/epmaefhielclhlnmjofcdapbeepkmggh)

***


## 이게 보안? 

* 마우스 오른쪽,텍스트 셀렉트 막기
* 키보드 버튼 기능 막기
* URL 숨기기 꼼수 (프레임)

UX,접근성 저하

## 우클릭 금지 사이트가 품고 있는 다음 생각 중 더 안타까운 것은?

1. 우클릭 금지로 컨텐츠 불펌을 방지할 수 있다는 믿음 
2. 본인의 사이트에 불펌의 유혹을 불러일으킬 만한 컨텐츠가 있다는 믿음


[원문](https://twitter.com/txtry/status/312096953892732928)

## 진정한 의미의 보안

* 폼 검증은 백엔드 에서도
* eval 사용금지 
* 파라미터값 사용시 주의 
* [HttpOnly Cookie](https://www.owasp.org/index.php/HttpOnly) 사용 


## OWASP

[국제 웹 보안 표준 기구](http://ko.wikipedia.org/wiki/OWASP)

*** 

## 크롬 보안 낮추기 

* Disable Same-Origin Policy : --disable-web-securit

```
    open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
```


























