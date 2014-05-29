// console.log(wing_primary_sisa)

var sisaList = wing_primary_sisa.component.data;
var strList = []; 

for(var i=0; i < sisaList.length; i++){

	var item = sisaList[i].component.data[0];

	console.log( item, sisaList[i].component );

	strList.push( '<li class="list-group-item">'
		+'<a href="'+item.url+'">'+item.title+'</a> '
		+'<span class="glyphicon glyphicon-share-alt"></span></li>' );
}

$('.list-group').append(strList.join(''));