class Department {
//   name: string;
// private readonly  id: string;
  private employees: string [] =[]; //only accessible within class 'Department'.

  constructor(public name: string, private readonly id: string) {  //readonly means it shouldn't change
    // this.name = n;
  }

  description(this: Department) {   //this refers to an instance based on Department class, so obj would be of type Department
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

const accounting = new Department("Accounting", "d1");
console.log(accounting);

accounting.description();

accounting.addEmployee("max")
accounting.addEmployee("manu")
// accounting.employees[2] = "anna"
accounting.printEmployeeInfo()

// const sales = new Department("Sales");
// console.log(sales);

// const z = sales.description();
// console.log(z); //This is the department of Sales



// const acc = {description: x.description, name: 's'}
// acc.description(); //This is the department of undefined


