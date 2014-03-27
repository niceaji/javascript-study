

var myPhone = new Phone({ color:"white", price:100 });

var myPhone2 = new Phone({ color:"black", price:200 });

console.log(myPhone.color);
console.log(myPhone.model);

myPhone.setNumber( '01122020303');
myPhone.call();

window.close();