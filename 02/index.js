// > tsc --watch index.ts
var employees = ['Bob', 'Sally', 'Sam'];
var doc = document;
doc.write(employees.toString() + '<br/>');
var super_heros = [];
super_heros.push({
    real_name: 'josh',
    hero_name: 'Batman'
});
doc.write(super_heros[0].real_name.toString() +
    '<br/>' +
    super_heros[0].hero_name.toString() +
    '<br/>');
