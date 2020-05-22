let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

// - zda vůbec mohou nebo nemohou na dovolenou jet
let savings = osoba1.uspory + osoba2.uspory;

const holidaysYet = (savings) => {
  if (savings >= 100000) {
    console.log('Můžete vyrazit')
  } else {
    console.log('Ještě šetřete')
  }
};
// - pokud mohou jet (tj. mají dohromady 100 tisíc):
//   - napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc)
//   - nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí
//     ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit

const holidaysTogether = (osoba1, osoba2) => {
  if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
    console.log('Můžete vyrazit')
  } else if (osoba1.uspory >= 50000 && osoba2.uspory <= 50000 && osoba1.uspory + osoba2.uspory >= 100000) {
    console.log(`Karolína bude muset doplatit ${50000 - osoba2.uspory}`)
  } else if (osoba1.uspory <= 50000 && osoba2.uspory >= 50000 && osoba1.uspory + osoba2.uspory >= 100000) {
    console.log(`Alena bude muset doplatit ${50000 - osoba1.uspory}`)
  } else {
    console.log('Ještě šetřete')
  }
};