'use strict';

let telephoneBook: object = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P.Askew': '307-687-2982'
}


function searchingPhoneNumber(name: string): string {
  return telephoneBook[name]
};
console.log('Jhon K. Miller phone number is: ' + searchingPhoneNumber('John K. Miller'));

function searchingPerson(number: string): string {
  for (let i: number = 0; i < Object.keys(telephoneBook).length; i++) {
    if (Object.values(telephoneBook)[i] === number) {
      return Object.keys(telephoneBook)[i];
    }
  }

};
console.log('The person is: ' + searchingPerson('307-687-2982'));

function searchingValidPerson(name: string): void {
  if (searchingPhoneNumber(name) == undefined) {
    console.log(name + ' is not exist.');
  } else {
    console.log('We know about ' + name);
  }
}

searchingValidPerson('Chris E. Myers')