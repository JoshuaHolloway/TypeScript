interface SuperHero {
  real_name: String;
  hero_name: String;
}

var superman: SuperHero = {
  real_name: 'Clark Kent',
  hero_name: 'Superman'
};

const doc = document;
doc.write(superman.real_name + ' is ' + superman.hero_name);
