class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const xx = new Department('Accounting');
console.log(xx);

const yy = new Department('Sales');
console.log(yy);


