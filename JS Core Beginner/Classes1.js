class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`);
    }
}

let person1 = new Person("Иван", 30, "Россия");
let person2 = new Person("Анна", 25, "США");

person1.displayInfo(); 
person2.displayInfo(); 
