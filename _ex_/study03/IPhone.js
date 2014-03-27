

(function(){
	
	//
	function IPhone(options){
		
		Phone.call(this, options);
		
		this.isSiri = true;
		
	}
	
	IPhone.prototype = new Phone(); 
	IPhone.prototype.constructor = IPhone;
	
//	IPhone.prototype.startFaceTime = function(){
//		console.log("페이스타임을 겁니다!");
//	};
//	

	
	window.IPhone = IPhone;

})();

