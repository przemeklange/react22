class Human {
    name = 'Alexander';
    printmyName = () => { console.log(this.name) }
}

const newPerson = new Human;
newPerson.printmyName();


number = [1, 2, 3, 4]
numbers = [...number, 5]
console.log(numbers)

number.map((e) => { console.log(e) })
number.map((e) => { console.log(e * 2) })

