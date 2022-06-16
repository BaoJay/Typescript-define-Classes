class Department {
    name: string;
    employee: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe (this: Department) {
        console.log("Department: ", this.name)
    }
    printEmployeeInformation(this: Department) {
        console.log(this.employee.length);
        console.log(this.employee);
    }
    addEmployee (name: string) {
        this.employee.push(name)
    }
}

const accounting = new Department ('Accounting');

accounting.addEmployee('Bao')
accounting.addEmployee('Thi')
accounting.employee[2] = 'Truong'

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {
//     describe: accounting.describe,
//     name: 'Copy Accounting'
// }
// accountingCopy.describe();