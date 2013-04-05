## javascript 기본

* [http://niceaji.github.com/javascript-study/?doc=basic](http://niceaji.github.com/javascript-study/?doc=basic)
* [문서로 보기](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/basic.md)
* [Source](https://github.com/niceaji/javascript-study)

***

## History

1.  1995년 넷스케이프 '라이브 스크립트'
2.  자바의 유명세를 본 따 '자바 스크립트'로 변경3.  MS에서 Jscript발표
4.  ECMA에서 자바스크립트 표준 관리
5.  ECMA-262 표준 제정 -> ECMAScript


## 무얼 할수 있나요?

*   프론트엔드 애플리케이션 (웹, [크롬 확장기능](https://chrome.google.com/webstore/category/home?hl=ko))
*   서버 애플리케이션 ([Node.js](http://nodejs.org))
*   모바일 애플리케이션 ([Titaniume](http://www.appcelerator.com/),[PhoneGap](http://phonegap.com/))
*   각종 위젯류 등...


## 가장 뜨거운 언어

![](https://img.skitch.com/20120502-1jcxy5hrhs5sdpagsu9gdbga43.png)

<small>[https://github.com/languages](https://github.com/languages)</small>

## 순위

![](https://img.skitch.com/20120502-8hpr2mcs5yxq988e1k6gbcie8c.png)

<small>[http://www.tiobe.com/inde...](http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html)</small>

***

## Interpreter

컴파일되지 않고 실행기(인터프리터)를 통해서 바로 실행

*   [V8 JavaScript Engine - Chrome](http://code.google.com/p/v8/)
*   [SpiderMonkey - Firefox](https://developer.mozilla.org/en/SpiderMonkey)

## Object-Oriented Programming
자바스크립트는 객체 지향 프로그래밍 언어


## Prototype 스타일의 상속 모델
객체지향 상속매커니즘은 Prototype 기반


## 느슨한 타입체크
변수의 타입을 명시할 필요가 없다


## 선택적인 세미콜론 사용
생략가능하나 항상 붙이는 습관!

***


## 실습환경

*   [크롬 다운로드](https://www.google.com/chrome?hl=ko)
*   [크롬 개발자 도구 ](https://developers.google.com/chrome-developer-tools)

## Hello World!

    var str = 'hello world!';
    console.log(str);

## 변수

    var x = 'abc';

* var 사용 권장 
* 첫번째 문자로 숫자 불가능 
* 변수명 대소문자 구분
* 어떤 값도 넣기 가능, 자동 타입을 변환

## 유효범위

    var nick = "aji"; //전역변수

    function test(){
        var age = "30"; //지역변수 
        console.log(nick , age);
    }
    test();
    console.log(age);

* Block Scope **X**, Function Scope **O**
* var 를 빼면?


***


## Datatype - 숫자

    var count = 5;


정수,실수 구분하지 않음   

<table>
<tr><td>Infinity</td><td>무한대를 나타내는 특수한 값</td></tr>
<tr><td>NaN</td><td>숫자가 아닌 특수한 값</td></tr>
<tr><td>Number.MAX_VALUE</td><td>표현 가능한 가장 큰 수</td></tr>
<tr><td>Number.MIN_VALUE</td><td>표현 가능한 (0에 가까운) 가장 작은 수</td></tr>
<tr><td>Number.NaN</td><td>숫자가 아닌 특수한 값</td></tr>
<tr><td>Number.POSITIVE_INFOINITY</td><td>양의 무한대를 표현하는 특수한 값</td></tr>
<tr><td>Number.NEGATIVE_INFINITY</td><td>음의 무한대를 표현하는 특수한 값</td></tr>
</table>


## Datatype - 문자열


    var nick = 'my nick is \'aji\'';
    var homepage = "niceaji.github.com";



## Datatype - 불리언값

    var isMan = true; // true | false

    console.log( nick == "" );

    console.log( !!'test'  ); // true

제어 구조내에서 주로 사용 (if문 , for문) 



## Datatype - 함수 

    var log = function(str){
        console.log(str);
    };
    function log(str){
        console.log(str);
    }

js코드로 조작할수 있는 형태의 값 

변수나 배열, 객체에 저장가능, 전달인자로도 사용     



## Datatype - 객체 

    var image = {};// image = new Object();     

    image.width = 1;
    image.height = 2;

    image['width'] = 1; //연관배열

    image['name'+i] = '1.jpg'; //동적으로도 할당 가능

    image = {width:1,height:2} 

이름붙은 값(프로퍼티) 들이 모임  



## Datatype - 배열  

    image = []; // new Array();

    image[0] = '1.jpg';
    image[1] = '2.jpg';

    image = ["1.jpg",2,{name:"3.jpg"}];

* 데이터 값들의 모음 
* 객체 : 데이터값에 이름 
* 배열 : 데이터값에 번호(index) 



## Datatype - null  

    var nick = null;

아무런 값도 나타내지 않는 특수한 키워드 



## Datatype - undefined  

    var nick; //undefined

* global 변수 undefined에 접근할 때
* return 구문이 없는 함수는 undefined를 반환함
* return 구문으로 아무것도 반환하지 않을 때
* 없는 프로퍼티를 찾을 때
* 함수 인자가 생략될 때
* undefined가 할당된 모든 것

***

## 자동 변환

![](https://img.skitch.com/20120504-rkfapwhi2g1htnbswdk8yx1hrr.png)

한 타입의 값이 다른 타입값을 요구하는 곳에서 사용될때 필요에 따라 알아서 변환 


## 자동 변환 예제 

    if("test"){  //true 로 자동 변환 
        console.log("true");
    }       

    "2"  + 2; // "22"

    2 + 5 + "1" // "71"

## 기본 타입 래퍼 객체  

    var str = "jeju";
    console.log( str.substring(0,2) ); //String 래퍼객체로 자동변환 

    var str = new String("jeju");
    console.log( str + " jeju" );

## 값에 의한 & 참조에 의한 

    //call by value
    function byValue(count){
        count = count + 2;
    }
    var count = 3;
    byValue(count);
    console.log(count); //3

    //call by reference
    function byReference(count){
        count.push("2");
    }
    var count = ["1"];
    byReference(count);
    console.log(count); // ["1","2"]

*   by value : 기본타입 ( 숫자,불리언,문자열)
*   by reference : 객체타입

***


## + 연산자

    console.log( 1 + 2 ) // 3
    console.log( "a" + "b" ) // "ab"
    console.log( 1 + "4") // "14"

* 숫자형일경우 값 더함 
* 문자형일경우 이어붙임

## 동등 연산자

    ""           ==   "0"           // false
    0            ==   ""            // true
    0            ==   "0"           // true
    false        ==   "false"       // false
    false        ==   "0"           // true
    false        ==   undefined     // false
    false        ==   null          // false
    null         ==   undefined     // true
    " \t\r\n"    ==   0             // true

* ==  동등,  != 부등   : 비권장 
* **=== 일치, !== 불일치**


## in 연산자

    var image = {width:1,height:2};

    console.log( "width" in image ); //true
    console.log( "size" in image );
    console.log( "toString" in image );

* 좌변값이 우변객체 프로퍼티 이름에 해당할 경우

## delete 연산자

    delete image.width;

    image.width = null; //value만 지우고 프로퍼티 는 남겨둠

* 객체의 프로퍼티 삭제 
* var 로 선언한 변수 delete못함 


## typeof 연산자

    console.log( typeof (1 + "4") );

    typeof foo !== 'undefined';

## instanceof 연산자

    var arr = [1,2,3];

    console.log( a instanceof Array) //true

인스턴스인지 여부

***


## if 문

    if(isMan){ // 표현식이 true일경우 블럭 코드 실행
        console.log('난 남자');
    }
    else {
        console.log('난 여자인가?');
    }

## for 문

    for(var count=0; count < 5; count++){
        //총 5번 실행
    }

    var obj = {a:1,b:2};

    //느리다.비권장 
    for(var prop in obj){
        console.log(prop, obj[prop]);
    }


## 함수 

    function sum(x){
        var y = 1;
        return x+y; //return 문이 없을경우 undefined반환 
    }


## try / catch / finally 

    try{
        //이부분 실행시 예외발생할경우 catch 로 이동
    }
    catch(e){
        // 예외발생할 경우만 실행
    }   
    filnally{
        //무조건 실행 
    }

***


## 객체 

    var obj = 
        {
            "nick" : "aji",
            "age" : 30,
            "area" :  "jeju",
            "hobby" : ["movie","walk"]
        };

* JSON (제이슨,JavaScript Object Notation) 
* is a lightweight data-interchange format


## 기본 프로퍼티,메소드 

    //constructor : 생성자 함수를 가르킴
    obj.constructor == Object // true

    // hasOwnProperty : 객체가 프로퍼티를 소유(상속이 아닌)하고 있는지 검사 
    console.log( obj.hasOwnProperty("nick") );

    // toString() : 문자열로 반환, 그다지 유용하지 않는 정보 출력
    alert(obj) // alert(obj.toString())


* Object에서 상속받은 프로퍼티와 메소드 


## 내장 객체 

    console.log(window); //브라우저 가장 최상위 객체 

    var date = new Date();

    Math.floor(1.4);    //static

    var patten = new RegExp("^abc"); //패턴매칭 

    [참고 레퍼런스](http://www.w3schools.com/jsref/default.asp)


## 배열 

    var arr = [1,2,3];

    // new Array() 비권장, 모호하다 
    var arr = new Array(1,2,3); // [1,2,3]
    var arr = new Array(3); // []  // [], arr.lenght=3
    console.log(arr.length); //3

    for(var i=0; i < arr.length; i++){
        console.log(arr[i]);
    }

[배열 관련 메소드 보기](http://www.w3schools.com/jsref/jsref_obj_array.asp)

***



## 함수-중첩함수

    function sum(){
        function sum2(x){
            return x + x;
        }
        console.log(sum2(3));
    }


## 생략 가능한 전달인자

    function sum(x, y){
        if(!y) y = 1;
        console.log(x+y);
    }


## 가변 길이 전달인자

    function sum(){
        var size = 0;
        for(var i=0; i < arguments.length; i++){
            size += arguments[i];
        }

        console.log(size);
    }

    sum(1,2,3,4,5,6,7);

* Arguments 객체로  인자 전달
* arguments 객체는 Array가 아니다


## 객체를 전달인자로 사용

    function area1(width,height){

        console.log(width * height);
    }

    function area2(options){
        console.log(options.width * options.height);
    }

    area2( {width:300,height:200} );

전달인자가 많을경우 유용 


## 호이스팅(Hoisting)

    var name = "global";
    function test() {
        console.log(name);
        var name = "local";
        console.log(name);
    }

    //함수또한 
    test2(); 
    function test2() { console.log('test')};

* var 구문, function 선언문을
* 해당 Scope의 가장 처음으로 옮기는 것 
* 항상 상단에서 변수선언사용 권장

## 함수-프로퍼티와 메소드

    function test(x,y){}
    console.log(test.length); //함수가 전달받기 기대하는 인자갯수

    //직접 정의도 가능 
    test.count = 1; //static 

    test.prototype;  //prototype객체를 가르킴 

## 자주쓰는 전역 함수

    alert("alert");

    var who = prompt("당신은 누구세요?");

    var isDelete = confirm("정말 삭제합니까?");

    var enc = encodeURIComponent("다음커뮤니케이션");
    decodeURIComponent(enc);

    isNaN("1"); //숫자 여부 

    parseInt("12");
    parseInt("09",10); //항상 두번째 인자 주는 습관 
    parseFloat("10.33");


## setTimeout 과 setInterval

    function test(){
        console.log("test()");
    }

    var id = setTimeout(test, 1000); //1초후 1번실행

    var id = setInterval(test, 1000); //1초마다 계속 실행

    //setInterval 보다 나은 방법
    function test(){
        console.log("test()");
        setTimeout(test, 1000);
    }

    //clearTimeout(id) ;
    //clearInterval(id);

