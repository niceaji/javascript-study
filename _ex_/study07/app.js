var API_URL = "http://apis.daum.net/search/web?q={query}&apikey=8cba11dfd015b23269346922b75187e216911ba8&output=json&callback={callback}";



$('#searchForm').on("submit",function(event){
	
	console.log('submit');
	
	var query = $('#query').val();
	var url = API_URL.replace('{query}',query).replace('{callback}','?');
	
	$.ajax(url,{
		cache : true,
		dataType : 'jsonp',
		complete  :function(jqXHR, status){
			var data = jqXHR.responseJSON;
			var items = data.channel.item;
			
			for(var i=0 ; i< items.length; i++){
				
				console.log(items[i].title);
				
			}
			
		}
		
	});
	
	
	
	return false;
});