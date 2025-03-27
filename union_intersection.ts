interface Employee {
  birthday: Date;
  name: string;
};

interface Company {
  companyName: string;
  workPhone: string;
}

type ContactType = Employee | Company; // union type
type CompContact = Employee & Company; // intersection type

function getContactType(contact: ContactType): string {
  if ('birthday' in contact) {
    return 'Employee';
  } else {
    return 'Company';
  }
}

// function getContactType(contact: CompContact): string {
//   if ('birthday' in contact) {
//     return 'Employee';
//   } else {
//     return 'Company';
//   }
// }

// Union Types
const res = getContactType({
  birthday: new Date(),
  name: 'John Doe',
}); 

const res2 = getContactType({
  birthday: new Date(),
  name: 'John Doe',
  companyName: 'Acme Inc.',
  workPhone: '555-1234'
}); 


// Intersection Types , works only with CompContact
const res3 = getContactType({
  birthday: new Date(),
  name: 'John Doe',
  companyName: 'Acme Inc.',
});