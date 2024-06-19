class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const bonus = 0.1 * this.salary;
        return (this.salary + bonus) * 12;
    }
}

let manager1 = new Manager("Иванов Иван", 50000, "Отдел продаж");
let manager2 = new Manager("Петров Петр", 60000, "Отдел разработки");

console.log(`${manager1.name} (${manager1.department}): Годовая зарплата ${manager1.calculateAnnualSalary()} USD`);
console.log(`${manager2.name} (${manager2.department}): Годовая зарплата ${manager2.calculateAnnualSalary()} USD`);
