let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const holidaysTogether = (osoba1, osoba2) => {
  let savings = osoba1.uspory + osoba2.uspory;
  if (savings >= 100000) {
    console.log('Můžete vyrazit')
  } else if (osoba1.uspory >= 50000 && osoba2.uspory <= 50000 && osoba1.uspory + osoba2.uspory >= 100000) {
    console.log(`Karolína bude muset doplatit ${50000 - osoba2.uspory}`)
  } else if (osoba1.uspory <= 50000 && osoba2.uspory >= 50000 && osoba1.uspory + osoba2.uspory >= 100000) {
    console.log(`Alena bude muset doplatit ${50000 - osoba1.uspory}`)
  } else if (osoba1.uspory <= 50000 && osoba2.uspory <= 50000) { console.log(`Ještě vám chybí ${100000 - savings}`) + console.log(`${osoba1.jmeno} bude muset doplatit ${50000 - osoba1.uspory} a ${osoba2.jmeno} bude muset doplatit ${50000 - osoba2.uspory}`) }
};

holidaysTogether(osoba1, osoba2)