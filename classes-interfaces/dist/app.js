"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        //   name: string;
        // private readonly  id: string;
        this.employees = []; //only accessible within class 'Department'.
        // this.name = n;
    }
    description() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
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
accounting.addEmployee("max");
accounting.addEmployee("manu");
// accounting.employees[2] = "anna"
accounting.printEmployeeInfo();
// const sales = new Department("Sales");
// console.log(sales);
// const z = sales.description();
// console.log(z); //This is the department of Sales
// const acc = {description: x.description, name: 's'}
// acc.description(); //This is the department of undefined
