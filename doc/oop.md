## javascript 객체 지향 프로그래밍

* Class, this, Closure
* [http://niceaji.github.com/javascript-study/?doc=oop](http://niceaji.github.com/javascript-study/?doc=oop)
* [전체보기](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/oop.md)
* [Source](https://github.com/niceaji/javascript-study)

***

## 클래스

    function Car(model, year){

        this.SEAT_COUNT = 5;

        this.model = model;
        this.year = year;
    }

    var car = new Car('k5', 2012);
    console.log(car.model);

    //new 키워드가 없으면 그 함수는 객체를 반환하지 않는다.
    Car('k5', 2012);

* 생성자 함수로 구현  
* this 키워드 항상 사용 
* [참고 java 클래스 ](https://github.com/niceaji/javascript-study/blob/gh-pages/ex/JavaClass.java)


## 메소드 정의 

    function Car(model, year){

        this.SEAT_COUNT = 5;

        this.model = model;
        this.year = year;

        this.start=function(){
            console.log('start');
        };
    }

    var car = new Car('k5', 2012);
    car.start = function(){
        console.log('start');
    };

* 둘다 바람직 하지 않다    


## prototype 

    Car.prototype.start = function(){
        console.log('시동 걸림');
        this.isStart = true;
    };
    Car.prototype.move = function(speed){
        if(!this.isStart){
            console.log("시동을 걸어주세요!");
            return;
        }
        console.log(this.model + " : "+ speed + "km");
    };

1. 모든 함수에는 미리 정의된 prototy객체를 가리키는 prototype 프로퍼티
1. 생성자를 통해 생성되는 객체들은 
1. prototype이 가진 프로퍼티들을 똑같이 상속 


## 내장객체 확장

    String.prototype.addDaum = function() {
        return this+' Daum';
    };

    "hello ".addDaum();


## 상속 

    // 버스 클래스 구현 
    function Bus(model, year){
        Car.call(this, model,year); //call()사용 
        this.SEAT_COUNT = 20;
    }

    Bus.prototype = new Car(); 
    Bus.prototype.constructor = Bus;

    //Function.call();
    //Function.apply();


* prototype 스타일의 상속 모델


## 오버로딩  

    Bus.prototype.ride = function(){

        if(!this.seat){
            this.seat = [];
        }
        for(var i=0; i < arguments.length; i++){
            this.seat.push( arguments[i] );
        }
    };

    bus.ride("a","b","c");

* 인자가 다른 같은 이름의 메소드
* 가변길이 전달 인자

## 오버라이딩  

    Bus.prototype.move = function(speed){

        if(speed > 60){
            console.log("버스는 60km이상이면 위험!");
            speed = 60;
        }
        Car.prototype.move.call(this, speed);
    };
    bus.ride(80);

* 상위클래스의 메소드를 재정의

## 클래스 프로퍼티, 메소드

    //static
    Car.handleNum = 1;

    Car.unfoldAirBag = function(airbag){

        // airbag 펼칠 상황인지 체크 

        //
        airback.unfold();
    };



## private 

    function Car(model, year){
        this.getModel=function(){ return model };
        this.getYear=function(){ return year };
    }

    //즉시 실행 함수
    (function(){
        var model  = '';
        var year = '';

        var Car = function(){

        };
        Car.prototype.getModel = function(){
            return model;
        };

        window.Car = Car;
    })();

*** 

## this-Global

    console.log(this); //this==window

## this-Function

    //함수를 호출
    function test(){
        console.log(this); //this==window
    }

## this-Method

    var obj = {
        test : function(){
            console.log(this);  // this==obj
        }  
    };
    obj.test();

## this-Constructor
    
    function Obj(){
        console.log(this); //this == obj
    }
    var obj = new Obj();


## this-.call()
    
    var obj = {
        test : function(){
            console.log(this);  // this==context
        }  
    };
    obj.test.call(context, arg);

## this-.apply()

    
    var obj = {
        test : function(){
            console.log(this);  // this==context
        }  
    };
    obj.test.apply(context, [arg]);

## this-html

     <div id="link" onclick="alert(this);return false;">링크</div>

* http://jsfiddle.net/vfV2e/


 


***

## 클로저-Closure

* 지역 변수(Local Variable)의 참조(by Reference)를 가진 함수
* Scope 밖에 있는 변수들에 접근 가능한 함수 
* 생성 당시의 환경을 간직한 있는 코드 블록

## 예제코드1

    var example = function(){
        var i = 1;
        return function(){
            alert(i++);
        };
    }();

    /*
    var example = function(){
        return i++;
    }
    */

    example(); //계속 호출 

## 예제코드2-1

    var list = document.getElementsByTagName("li");

    for(var i=0; i < list.length; i++) {
        list[i].onclick = function() {
            alert( i+1 );
        }
    }

* http://jsfiddle.net/dB2ZA/1/

## 예제코드2-2

    for(var i=0; i < list.length; i++) {    
        
        (function() { 
            var idx = i;
            items[i].onclick = function() {
                alert("My Sequence is " + (idx+1)); 
            }
        })();
    }

* http://jsfiddle.net/dB2ZA/1/
















