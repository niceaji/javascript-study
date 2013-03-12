class Car 
{
	
	static int handleNum = 1;
	
	String model;
	int year;
	boolean isStart;
	
	Car(String model, int year){
		this.model = model;
		this.year = year;
	}

	void start(){
		isStart = true;
		System.out.println("시동걸림");
	}

	void move(float speed){
		if(!isStart){
			System.out.println("시동을 걸어주세요!");
			return;
		}
		System.out.println(model + " : "+ speed + "km");
	}
	
	static void unfoldAirBag(AirBag airbag){
		
		// airbag 펼칠 상황인지 체크 
		
		airbag.unfold();
	}

	public String getModel() {
		return model;
	}

	public int getYear() {
		return year;
	}
	
}

class Bus extends Car
{
	
	String[] seats;
	
	static final int SEAT_COUNT = 20;
	
	public Bus(String model, int year) {
		super(model, year);
	}
	
	void ride(String[] seats){
		this.seats = new String[seats.length];

		for(int i=0; i<seats.length; i++){
			this.seats[i] = seats[i];
		}
	}
	
	void move(float speed){
		if(speed > 60){
	 		System.out.println("버스는 60km이상이면 위험!");
	 		speed = 60;
	 	}
		
		super.move(speed);
	}
}

class AirBag{
	void fold(){ System.out.println("fold airbag"); }
	void unfold(){ System.out.println("unfold airbag"); }
}

class JavaClass
{

	public static void main(String[] args){
		
		Car car = new Car("k5", 2012);
		
		System.out.println(car.model);
		
		car.start();
		car.move(3);
		
		
		Bus bus = new Bus("Benz", 1988);
		
		String[] seats = {"a","b","c"};
		
		bus.ride(seats);
		bus.start();
		bus.move(80);
		Bus.unfoldAirBag(new AirBag());
		
		// 여기서 this는 Test

	}
}