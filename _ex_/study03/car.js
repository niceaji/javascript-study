function Car(model, year){

    this.SEAT_COUNT = 5;

    this.model = model;
    this.year = year;
}

var car = new Car('k5', 2012);
console.log(car.model);



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

function Bus(model, year){
    Car.call(this, model,year); //call()사용 
    this.SEAT_COUNT = 20;
}

Bus.prototype = new Car(); 
Bus.prototype.constructor = Bus;


