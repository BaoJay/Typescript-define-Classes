class Department {
    // name: string;
    // private id: string;
    private employee: string[] = [];

    constructor(public name: string, private readonly id: string) {
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

// Define a IT Department class
class ITDepartment extends Department {
    constructor (id: string, public admins: string[]) {
        super('IT', id);
    }
}

class AccountingDepartment extends Department {
    constructor (id: string, private report: string[]) {
        super('Accounting', id);
    }

    addReport (text: string) {
        this.report.push(text);
    }

    printReport () {
        console.log(this.report)
    }
}


const it = new ITDepartment ('d1', ['Bao']);
const accounting = new AccountingDepartment ('d2', ['Times up!']);

it.addEmployee('Truong')
it.addEmployee('Thi')
it.addEmployee('Phuoc')
// accounting.employee[2] = 'Truong'

it.describe();
// it.name = 'New Name';
it.printEmployeeInformation();
console.log(it)

accounting.addReport('Something went wrong.....');
accounting.printReport()


// const accountingCopy = {
//     describe: accounting.describe,
//     name: 'Copy Accounting'
// }
// accountingCopy.describe();