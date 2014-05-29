// console.log(wing_primary_sisa)

var sisaList = wing_primary_sisa.component.data;
var strList = []; 

for(var i=0; i < sisaList.length; i++){

	var item = sisaList[i].component.data[0];

	console.log( item );

	strList.push( '<li class="list-group-item">'+item.title+'</li>' );
}

$('.list-group').append(strList.join(''));