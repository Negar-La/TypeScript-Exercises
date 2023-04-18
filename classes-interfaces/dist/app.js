"use strict";
class Department {
    // private means only accessible within class 'Department'. private field or private property.
    //private keyword is a modifier.
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // public name: string;  public is default, you dont need to add it.
        // private readonly  id: string;
        this.employees = []; // protected is like private, accessible in this class and also in extended classes
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id); //super calls the constructor of the base class
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'max') {
            return;
        }
        this.employees.push(name); //because employees is protected, not private.
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ['max']);
console.log(it);
it.description();
it.name = 'NEW NAME'; //ecause name is public!
it.addEmployee("max");
it.addEmployee("manu");
// it.employees[2] = "anna"
it.printEmployeeInfo();
const accounting = new AccountingDepartment("d2", []);
accounting.addReports('something went wrong...');
accounting.printReports();
accounting.addEmployee('max'); // we see 'max' is not added.
accounting.addEmployee('neg');
accounting.printEmployeeInfo();
console.log(accounting);
// const sales = new Department("Sales");
// console.log(sales);
// const z = sales.description();
// console.log(z); //This is the department of Sales
// const acc = {description: x.description, name: 's'}
// acc.description(); //This is the department of undefined
