// console.log(wing_primary_sisa)

var categoryList = ['sisa','life','sports','enter'];


categoryList.forEach(function(category){
	printNewsList( window['wing_primary_'+category].component.data, category );
});


function printNewsList(newList, category){
	var strList = []; 

	for(var i=0; i < newList.length; i++){

		var item = newList[i].component.data[0];

		// console.log( item, newList[i].component );

		strList.push( '<li class="list-group-item">'
			+'<a href="'+item.url+'">'+item.title+'</a> '
			+'<span class="glyphicon glyphicon-share-alt"></span></li>' );
	}
	$('#'+category).html( $('<ul class="list-group">').append(strList.join(''))  );
}
