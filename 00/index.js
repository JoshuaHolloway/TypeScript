//> tsc index.ts --target ES6
var my_name = 'Josh';
var my_age = 36;
var can_vote = true;
var anything = 'dog';
anything = 42;
var doc = document;
doc.getElementById('ts').innerHTML = 'My name is ' + my_name;
doc.write('my_name is a ' + typeof my_name + '<br/>');
doc.write('can_vote is a ' + typeof can_vote + '<br/>');
doc.write('anythin is a ' + typeof anything + '<br/>');
var str_to_num = parseInt('5');
var x = 5;
var num_to_str = x.toString();
doc.write('num_to_str is a ' + typeof num_to_str + '<br/>');
