

(function(){
	
	var number = '';
	
	function Phone( options ){
		
		if(!options){
			options = {
				color : "white",
				price : "1"
			};
		}
		
		this.model = "iPhone";
		this.color = options.color ;
		this.price = options.price;
	}
	
	Phone.prototype.call = function(){
		
		if(number === ""){
			console.log("개통하세요!");
		}
		else {
			console.log("전화를 겁니다!");
		}
	};
	Phone.prototype.setNumber = function(userNumber){
		
		number = userNumber;
	};
	
	
	
	
	
	
	window.Phone = Phone;

})();

