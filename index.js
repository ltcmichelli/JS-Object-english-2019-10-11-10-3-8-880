var person = {
  name: "John",
  surname: "Mike"
};

person.name='Peter';
delete person.name;


var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
  };

function countNum(unit, total){
  if (unit <= total){
    var temp = total / unit;
    var num = Math.floor(temp);
    return num
  }else return 0;
}

var num = countNum(fruit.apple, 50);

for (var i = num; i >=0; i --){
  var total = 50;
  var a = i;
  
  total = total - (fruit.apple * a);
  var b = countNum(fruit.pear, total);
  total = total - (fruit.pear * b);
  var c = countNum(fruit.peach, total);
  total = total - (fruit.peach * c);
  if (total==0){
    console.log(a + " apple +"+ b + " pear+" + c + " peach = 50");
  }
}

num = countNum(fruit.pear, 50);

for (var i = num; i >=0; i --){
  var total = 50;
  var b = i;
  
  total = total - (fruit.pear * b);
  var a = countNum(fruit.apple, total);
  total = total - (fruit.apple * a);
  var c = countNum(fruit.peach, total);
  total = total - (fruit.peach * c);
  if (total==0){
    console.log(a + " apple +"+ b + " pear+" + c + " peach = 50");
  }
}

num = countNum(fruit.peach, 50);

for (var i = num; i >=0; i --){
  var total = 50;
  var c = i;
  
  total = total - (fruit.peach * c);
  var b = countNum(fruit.pear, total);
  total = total - (fruit.pear * b);
  var a = countNum(fruit.apple, total);
  total = total - (fruit.apple * a);
  if (total==0){
    console.log(a + " apple +"+ b + " pear+" + c + " peach = 50");
  }
}