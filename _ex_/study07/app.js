var API_URL = "http://apis.daum.net/search/web?\
q={query}&\
apikey=bd7a594383871e04a0c9f44ac2fa6bf876de268a&\
output=json&\
result=1&\
pageno={pageno}&\
callback={callback}";

var pageno = 1;

function callDaumApi(){
	
	var query = $('#query').val();
	var url = API_URL.replace('{query}',query)
					.replace('{callback}','?')
					.replace("{pageno}",pageno);
	
	$.ajax(url,{
		cache : true,
		dataType : 'jsonp',
		complete  :function(jqXHR, status){
			var data = jqXHR.responseJSON;
			var items = data.channel.item;
			var list = [];
			
			for(var i=0 ; i< items.length; i++){
				
				// $('#result').html( $('#result').html()  + items[i].title )

				 // str += items[i].title;

				 var title = items[i].title.replace(/&lt;/g , '<').replace(/&gt;/g , '>')
				 list.push( '<li>' + title + '</li>');

				console.log(title)
			}
			$('#result').append(  "<ul>" + list.join("") + "</ul>");
			$('#moreButton').show();
		}
		
	});

}


$('#moreButton').on('click',function(){
	pageno++;
	callDaumApi();

});

$('#searchForm').on("submit",function(event){
	
	callDaumApi();
	return false;
});