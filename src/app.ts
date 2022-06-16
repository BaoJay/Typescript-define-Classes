class Department {
    // name: string;
    // private id: string;
    private employee: string[] = [];

    constructor(public name: string, private id: string) {
        // this.name = name;
        // this.id = id;
    }

    describe (this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }
    printEmployeeInformation(this: Department) {
        console.log(this.employee.length);
        console.log(this.employee);
    }
    addEmployee (name: string) {
        this.employee.push(name)
    }
}

const accounting = new Department ('Accounting','d1');

accounting.addEmployee('Bao')
accounting.addEmployee('Thi')
// accounting.employee[2] = 'Truong'

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {
//     describe: accounting.describe,
//     name: 'Copy Accounting'
// }
// accountingCopy.describe();