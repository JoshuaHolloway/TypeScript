// > tsc --watch index.ts

const employees: string[] = ['Bob', 'Sally', 'Sam'];

const doc = document;
doc.write(employees.toString() + '<br/>');

interface SuperHero {
  real_name: String;
  hero_name: String;
}

let super_heros: SuperHero[] = [];

super_heros.push({
  real_name: 'josh',
  hero_name: 'Batman'
});
doc.write(
  super_heros[0].real_name.toString() +
    '<br/>' +
    super_heros[0].hero_name.toString() +
    '<br/>'
);
