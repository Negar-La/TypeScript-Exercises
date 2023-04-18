class Department {
// public name: string;  public is default, you dont need to add it.
// private readonly  id: string;
  protected employees: string [] =[]; // protected is like private, accessible in this class and also in extended classes
  // private means only accessible within class 'Department'. private field or private property.
  //private keyword is a modifier.

  constructor(public name: string, private readonly id: string) {  //add modifier in front of parameters. readonly means it shouldn't change
    // this.name = n;
  }

  description(this: Department) {   //this in line 11 should refer to an instance based on Department class, so obj would be of type Department
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins:string[]){
    super('IT', id);  //super calls the constructor of the base class
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]){
    super('Accounting', id)
  }

  addEmployee(name: string) {   //overriding methods of the base class
    if (name === 'max') {
      return;
    }
    this.employees.push(name) //because employees is protected, not private.
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
    
  }
}

const it = new ITDepartment ("d1", ['max']);
console.log(it);

it.description();
it.name = 'NEW NAME' //ecause name is public!
it.addEmployee("max")
it.addEmployee("manu")
// it.employees[2] = "anna"
it.printEmployeeInfo()


const accounting = new AccountingDepartment ("d2", []);
accounting.addReports('something went wrong...');
accounting.printReports()
accounting.addEmployee('max') // we see 'max' is not added.
accounting.addEmployee('neg')
accounting.printEmployeeInfo()
console.log(accounting);


// const sales = new Department("Sales");
// console.log(sales);

// const z = sales.description();
// console.log(z); //This is the department of Sales



// const acc = {description: x.description, name: 's'}
// acc.description(); //This is the department of undefined


