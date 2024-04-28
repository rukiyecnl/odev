
//  The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}
//  son yazilan ilk yazilanlari ezer
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//  spread operatoru referance tiplerde de kullanilir
//  önemli orneklerine bak

//  key word arcs
//  parametre icin sınır koymadan da kullanabiliyoruz
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10

//  rest operatorunu kac tane parametre gelecegini bilmedigimiz zamanlarda kullaniriz
  


