//> tsc index.ts --target ES6

let my_name: string = 'Josh';
let my_age: number = 36;
let can_vote: boolean = true;
let anything: any = 'dog';
anything = 42;

const doc = document;
doc.getElementById('ts').innerHTML = 'My name is ' + my_name;

doc.write('my_name is a ' + typeof my_name + '<br/>');
doc.write('can_vote is a ' + typeof can_vote + '<br/>');
doc.write('anythin is a ' + typeof anything + '<br/>');

let str_to_num: number = parseInt('5');
let x: number = 5;
let num_to_str = x.toString();
doc.write('num_to_str is a ' + typeof num_to_str + '<br/>');
